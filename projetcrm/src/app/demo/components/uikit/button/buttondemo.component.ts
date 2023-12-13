import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {Reunion} from "../../shared/Reunion";
import {ReunionService} from "../../../service/ReunionService";

@Component({
    templateUrl: './buttondemo.component.html',
    styles: [`.form-container {
        max-width: 500px;
        margin: auto;
        padding: 20px;
        background-color: #f2f2f2;
        border-radius: 10px;
        margin-top: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group select, .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .form-group .options {
        display: flex;
    }

    .form-group .options label {
        margin-right: 20px;
    }

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: #428bca;
        color: white;
        cursor: pointer;
    }

    .button-container button:hover {
        background-color: #357ebd;
    }

    .table-container {
        margin-top: 30px;
    }
    /* CSS pour le tableau */
    .table-container {
        margin-top: 20px;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    .table th, .table td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    /* CSS pour les boutons d'action */
    .action-button {
        padding: 6px 12px;
        margin-right: 5px;
        background-color: #428bca;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .action-button:hover {
        background-color: #357ebd;
    }



    `]
})
export class ButtonDemoComponent implements OnInit {
    // reunion: Reunion = {
    //     date: '',
    //     heure: '',
    //     participants: '',
    //     sujet: '',
    //     titre: '',
    //     typeReunion: ''
    // };
    reunions: any[] = [];
    reunion: any = {};
    showReunionDialog: boolean = false;
    displayConfirmation: boolean = false;
    selectedReunion: Reunion = {
       // Remplacez par l'initialisation appropriée pour votre modèle Reunion
        id:0,
        sujet: '',
        titre: '',
        date: '',
        participants: '',
        heure: '',
        typeReunion: ''
    };




    planifierReunion() {
        // Ici, vous pouvez traiter les données de la réunion (this.reunion)
        // par exemple, enregistrer dans une base de données, envoyer des notifications, etc.
        console.log('Réunion planifiée :', this.reunion);
    }


    ngOnInit() {
        // this.reunionService.getReunions().subscribe((data: Reunion[]) => {
        //     this.reunions = data;
        //  });
        //  this.loadReunions();





}
    loadReunions() {
        this.reunionService.getReunions().subscribe(
            (reunions) => {
                this.reunions = reunions;

            },
            (error) => {
                console.error('Error fetching :', error);
            }
        );}
    editReunion(reunion: Reunion) {
        this.selectedReunion = { ...reunion };
        this.showReunionDialog = true;
    }
    confirmDeleteReunion(reunion: any) {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer cette réunion ?',
            accept: () => {
                // Appel à votre service de suppression ici
                this.deleteReunion(reunion);
            }
        });
    }



    constructor(private reunionService: ReunionService, private messageService: MessageService,private confirmationService: ConfirmationService) { }
    onSubmit() {
        this.reunionService.planifierReunion(this.reunion).subscribe(
            response => {
                // Gérer la réponse du serveur si nécessaire
                console.log('Réunion planifiée avec succès', response);
                // Ajouter la réunion à la liste des réunions
                this.reunions.push({ ...this.reunion });
                // Réinitialiser les données du formulaire
                this.reunion = {};
            },
            error => {
                // Gérer les erreurs si nécessaire
                console.error('Erreur lors de la planification de la réunion', error);
            }
        );
    }
    saveReunionChanges() {
        // Sauvegarde des modifications de la réunion
        this.reunionService.saveReunionChanges(this.selectedReunion).subscribe(
            () => {
                // Mettez à jour la réunion dans la liste des réunions
                const index = this.reunions.findIndex(r => r.id === this.selectedReunion.id);
                if (index !== -1) {
                    this.reunions[index] = { ...this.selectedReunion };
                }
                this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Modifications enregistrées avec succès' });
                this.hideReunionDialog();
            },
            error => {
                console.error('Erreur lors de la sauvegarde des modifications de la réunion', error);
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la sauvegarde des modifications de la réunion' });
            }
        );
    }


    deleteReunion(reunion: any) {
        // Ajoutez ici votre logique pour supprimer la réunion (appel à votre service)
        console.log('Réunion à supprimer :', reunion);
        // Supprimez la réunion du tableau (simulation de la suppression)
        const index = this.reunions.indexOf(reunion);
        if (index !== -1) {
            this.reunions.splice(index, 1);
        }
    }

    hideReunionDialog() {
        this.showReunionDialog = false;
    }

}
