import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {TaskService} from "../../service/TaskService";
import {Task} from "../shared/Task";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ConfirmationService } from 'primeng/api';

import {ChartData} from "chart.js";
import {Client} from "../shared/Client";
import {ClientService} from "../../service/ClientService";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/User";
import {UserService} from "../../service/UserService";
import {AuthService} from "../auth/service/AuthService";



@Component({
    selector: 'app-mydashboard',
    templateUrl: './mydashboard.component.html',


    styles: [`
        .container h2 {
            color: #bcdb34;
        }


        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 16px;
        }

        .table-container {
            max-height: 600px; /* Ajustez la hauteur maximale selon vos besoins */
            overflow-y: auto; /* Activer la barre de défilement verticale */
        }


        th {
            background-color: #f2f2f2;

            font-weight: bold;
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
            border-radius: 6px; /* Coins arrondis */
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
            color: #333;
        }

        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }

        :host ::ng-deep .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height: .5rem;
        }

        /* Style des boutons d'action */
        .action-button {
            margin-right: 5px;
            padding: 5px 10px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
        }

        /* Style des boutons d'action */
        .action-button {
            padding: 8px 16px; /* Ajustez la taille du bouton selon vos préférences */
            font-size: 16px; /* Ajustez la taille de la police selon vos préférences */
            border: none;
            border-radius: 4px; /* Ajustez la forme du bouton selon vos préférences */
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        /* Style du bouton "Supprimer" */
        .btn-danger {
            background-color: #ff6b6b;
            color: white;
        }

        /* Style du bouton "Modifier" */
        .btn-primary {
            background-color: #3498db;
            color: white;
        }

        /* Style au survol des boutons */
        .action-button:hover {
            filter: brightness(85%);
        }

        .d-flex .btn {
            margin-right: 5px; /* Ajoute un espace entre les boutons */
        }

        /* Style pour le champ de recherche */
        .text-right input[type="text"] {
            width: auto;
            margin-left: 10px; /* Ajoutez un espace entre le champ de recherche et les boutons */
        }

        /* Style pour les options de statut */
        .status-a-faire {
            background-color: #ff0000; /* Rouge */
            color: white;
            padding: 3px 6px;
            border-radius: 4px;
            font-weight: bold; /* Texte en gras */
        }

        .status-en-cours {
            background-color: #00ff00; /* Vert */
            color: black;
            padding: 3px 6px;
            border-radius: 4px;
            font-weight: bold; /* Texte en gras */
        }

        .status-terminee {
            background-color: #0000ff; /* Bleu */
            color: white;
            padding: 3px 6px;
            border-radius: 4px;
            font-weight: bold; /* Texte en gras */
        }

        /* Style pour les options de priorité */
        .priority-basse {
            border: 2px solid #ff0000; /* Bordure rouge */
            padding: 3px 6px;
            border-radius: 4px;
            color: #ff0000;
            font-weight: bold; /* Texte en gras */
        }

        .priority-normale {
            border: 2px solid #00ff00; /* Bordure verte */
            padding: 3px 6px;
            border-radius: 4px;
            color: #00ff00;
            font-weight: bold; /* Texte en gras */
        }

        .priority-haute {
            border: 2px solid #0000ff; /* Bordure bleue */
            padding: 3px 6px;
            border-radius: 4px;
            color: #0000ff;
            font-weight: bold; /* Texte en gras */
        }
        /* Styles pour le formulaire dans le dialogue */
       .form {
            max-width: 100%;
        }
         .form-group {
            margin-bottom: 20px;
        }

       .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

         .form-group .form-control {
            width: calc(100% - 20px); /* Ajustement de la largeur du champ */
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

       .p-dropdown.form-control {
            width: calc(100% - 20px); /* Ajustement de la largeur du champ */
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

       .form-group textarea.form-control {
            width: calc(100% - 20px); /* Ajustement de la largeur du champ */
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
        }
        .confirmation-dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .confirmation-content {
            background: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
        }

        .confirmation-content button {
            margin: 0 5px;
        }


        .form-group input[type="date"].form-control {
            width: calc(100% - 20px); /* Ajustement de la largeur du champ */
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        /* Style pour les boutons "Cancel" et "Save" */
       .p-button-text {
            margin-right: 10px;
        }



    `]
})
export class MydashboardComponent implements OnInit {

    userRole: string = '';
    lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                data: [50, 60, 70, 80, 90, 80, 85],
                label: 'Startup Growth',
                borderColor: '#3e95cd',
                fill: false
            }
        ]
    };
    pieDataa = {
        labels: ['Product Development', 'Marketing', 'Operations', 'Research'],
        datasets: [
            {
                data: [30, 20, 25, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF66']
            }
        ]
    };

    pieOptions = {
        responsive: true,
        maintainAspectRatio: false
    };
    polarData = {
        labels: ['Productivity', 'Efficiency', 'Innovation', 'Collaboration', 'Sustainability'],
        datasets: [
            {
                data: [20, 25, 15, 30, 10],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF66', '#4BC0C0']
            }
        ]
    };

    polarOptions = {
        responsive: true,
        maintainAspectRatio: false
    };

    lineOptions = {
        responsive: true,
        maintainAspectRatio: false
    };
    // pieOptions: any;
    // tasks: any[] = [];
    selectedTasks: any[] = []; // Tableau pour stocker les tâches sélectionnées
    taskDialog: boolean = false;
    clients: Client[] = [];


    newTask: any = {};
    submitted: boolean = false;
    pieData: ChartData;
    users: User[] = [
        // Ajoutez vos utilisateurs ici
    ];

    displayConfirmation: boolean = false;
    //task!: Task;
    editedUser: User | null = null;
    // isEditing = false;
    // editForm: FormGroup;
    tasks: Task[] = [];
    showTaskDialog = false; // Pour les tâches
    showClientDialog = false; // Pour les clients
    showUserDialog = false;
    clientToDelete: Client | null = null
    userToDelete: User | null = null;
    taskToDelete: Task | null = null;
    //showDialog = false;
    selectedTask: Task | null = null;
    searchFilter: string = '';
    selectedClient: Client | null = null;
    user = {
        photo: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        genre: '',
        position: '',
        tel: '',
        email: '',
        adresse: '',
        availability: '',
        experienceLevel: '',
        username: '',
        hireDate: '',
        cv: '',
        portfolio: '',
    }
    client = {
        name: '',
        address: '',
        phone: '',
        email: '',
        workRequested: '',
        specificRequirements: '',

        deadline: '',
        providedDocuments: ''

    }

    //   isEditing: boolean = false;
    task = {
        name: '',
        description: '',
        status: '',
        category: '',
        estimatedHours: 0,
        startDate: '',
        endDate: ''
    };

    statuses = ['A faire', 'En cours', 'Terminée']
    category = ['Analyse de projet', 'Dévelopement ', 'Design']
    priority = ['Basse', 'Normale', 'Haute']
    developer = ['Développeur', 'Designer ', 'Ingénieur']


    constructor(private taskService: TaskService, private formBuilder: FormBuilder, private confirmationService: ConfirmationService, private clientService: ClientService, private http: HttpClient, private userService: UserService, private authService: AuthService) {
        this.pieData = {
            labels: ['Développement', 'Tests', 'Design', 'Analyse de projet'],
            datasets: [
                {
                    data: [30, 20, 25, 15], // Remplacez par vos propres données
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#33FF66'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#33FF66'
                    ]
                }
            ]
        };

    }

    onEditTask(task: Task) {
        this.selectedTask = {...task}; // Copiez la tâche pour éviter de modifier la tâche d'origine
        this.showTaskDialog = true;

    }

    applySearchFilterS() {
        console.log('Search Filter:', this.searchFilter);

        if (this.searchFilter) {
            this.clients = this.clients.filter(client => client.name.toLowerCase().includes(this.searchFilter.toLowerCase()));
        } else {
            this.loadTasks();
        }
    }

    applySearchFilter() {
        console.log('Search Filter:', this.searchFilter);

        if (this.searchFilter) {
            this.tasks = this.tasks.filter(task => task.taskName.toLowerCase().includes(this.searchFilter.toLowerCase()));
        } else {
            this.loadTasks();
        }
    }


    openTaskDialog(task: Task) {
        this.selectedTask = {...task};
        this.showTaskDialog = true;
    }


    hideConfirmationDialog() {
        this.displayConfirmation = false;
        this.taskToDelete = null;
        this.clientToDelete = null;
    }

    onDeleteConfirmed() {
        // this.displayConfirmation = false;
        if (this.taskToDelete) {
            this.onDeleteTask(this.taskToDelete);
            this.taskToDelete = null;
        } else if (this.clientToDelete) {
            this.onDeleteClient(this.clientToDelete);
            this.clientToDelete = null;// Réinitialisez la tâche à supprimer après la confirmation
        } else {
            console.error('Cannot delete task. taskToDelete is null or undefined.');
        }
    }

    confirmDeleteClient(client: Client) {
        this.displayConfirmation = true;
        this.clientToDelete = client;
        // this.clientToDelete = client;
    }
    confirmDeleteUser(user: User) {
        this.displayConfirmation = true;
        this.userToDelete = user;

    }

    confirmDelete(task: Task) {
        this.displayConfirmation = true;
        this.taskToDelete = task;
    }

    hideDialog() {
        this.showTaskDialog = false;
        this.showClientDialog = false;
    }

    saveTask() {
        if (this.selectedTask) {
            // Task is not null, proceed to save
            console.log('Task saved:', this.selectedTask);
            this.showTaskDialog = false; // Fermez la boîte de dialogue après la sauvegarde
            this.selectedTask = null;
        } else {
            console.error('Cannot save task. selectedTask is null or undefined.');
        }
    }


    onCancelEdit(task: Task) {

    }


    ngOnInit(): void {
        this.userRole = this.authService.getLoggedInUserRole();
        //
        // if (this.userRole === 'admin') {
        //     // Si c'est un admin, récupérer toutes les tâches
        //     this.taskService.getAllTasks().subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
        // } else {
        //     // Sinon, récupérer les tâches de l'utilisateur courant
        //     const userEmail = this.authService.getLoggedInUserEmail();
        //     this.taskService.getTasksForUser(userEmail).subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
        // }
        // this.userService.getAllUsers().subscribe((data: User[]) => {
        //     this.users = data;
        // });
        this.clientService.getClients().subscribe(clients => {
            this.clients = clients;
        });

        this.taskService.getTasks().subscribe(
            (tasks) => {
                this.tasks = tasks;


            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );
        this.loadTasks();

    }


    loadTasks() {
        this.clientService.getClients().subscribe(
            (clients) => {
                this.clients = clients;

            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );

        this.taskService.getTasks().subscribe(
            (tasks) => {
                this.tasks = tasks;

            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );
    }

    loadClients() {
        this.clientService.getClients().subscribe(
            (clients) => {
                this.clients = clients;

            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );

    }

    loadUsers() {
        this.userService.getAllUsers().subscribe(
            (users) => {
                this.users = users;

            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );

    }

    /*confirmDelete(task: Task) {

        if (confirm('Are you sure you want to delete this task?')) {
            this.onDeleteTask(task);
        }
    }*/


    onDeleteTask(task: any) {
        this.taskService.deleteTask(task.id).subscribe(
            () => {
                // Mettez ici le code pour gérer la suppression
                console.log('Task deleted successfully.');
                this.loadTasks(); // Rechargez les tâches après suppression
            },
            (error) => {
                console.error('Error deleting task:', error);
            }
        );
    }

    deleteClient(client: Client) {

    }



    onDeleteClient(client: Client) {
        if (client) {
            this.clientService.deleteClient(client.id).subscribe(
                () => {
                    console.log('Client deleted successfully.');
                    this.loadClients(); // Mettez à jour la liste des clients après suppression
                },
                (error) => {
                    console.error('Error deleting client:', error);
                }
            );
        }
    }
    onDeleteUser(user:User) {
        if (user) {
            this.userService.deleteUser(user.id).subscribe(
                () => {
                    console.log('Client deleted successfully.');
                    this.loadClients(); // Mettez à jour la liste des clients après suppression
                },
                (error) => {
                    console.error('Error deleting client:', error);
                }
            );
        }
    }

    openClientDialog(client: Client) {
        this.selectedClient = {...client};
        this.showClientDialog = true;
    }

    // ... Importations et autres parties de votre code ...



    editUser(user: User) {
        // Mettez en œuvre la logique pour éditer un utilisateur ici
        console.log('Édition de l\'utilisateur :', user);
    }

    openUserDialog(user: User) {
        this.editedUser = {...user};
        this.showUserDialog = true;
        console.log('Opening user dialog for:', user);
    }

    onDeleteUserConfirmed() {
        if (this.userToDelete) {
            this.userService.deleteUser(this.userToDelete.id).subscribe(
                () => {
                    console.log('Utilisateur supprimé avec succès.');
                    this.loadUsers(); // Rechargez les utilisateurs après suppression
                },
                (error) => {
                    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
                }
            );
            this.displayConfirmation = false;
            this.userToDelete = null;
        } else {
            console.error('Impossible de supprimer l\'utilisateur. Utilisateur non valide.');
        }
    }


// ... Autres parties de votre code ...


    saveUser() {
        if (this.editedUser) {
            // Mettez en œuvre la logique pour enregistrer les modifications de l'utilisateur
            console.log('Utilisateur modifié :', this.editedUser);
            this.showUserDialog = false; // Fermez la boîte de dialogue après la sauvegarde
            this.editedUser = null;
        } else {
            console.error('error');
        }


    }
    deleteUser(user: User) {
        if (user) {
            this.userService.deleteUser(user.id).subscribe(
                () => {
                    console.log('Utilisateur supprimé avec succès.');
                    this.loadUsers(); // Rechargez les utilisateurs après suppression
                },
                (error) => {
                    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
                }
            );
        } else {
            console.error('Impossible de supprimer l\'utilisateur. Utilisateur non valide.');
        }
    }

}



