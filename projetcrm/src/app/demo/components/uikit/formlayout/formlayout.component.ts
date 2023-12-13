import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";
import {TaskService} from "../../../service/TaskService";


@Component({
    templateUrl: './formlayout.component.html',
    styles: [`

        .form-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-field {
            width: 150%;
          // margin-bottom: 15px;
            margin: 0 auto;

        }
        .submit-button {
            width: auto; /* Le bouton aura une largeur automatique en fonction de son contenu */
            display: block; /* Le bouton occupera toute la largeur disponible */
            margin: 0 auto; /* Centrer le bouton horizontalement */
        }

        .center-button {
            display: block;
            margin: 0 auto;
            text-align: center;
        }

        .file-input-container {
            position: relative;
            display: inline-block;
            overflow: hidden;
        }

        .file-input-text {
            display: block;
            background-color: var(--background-color);
            color: var(--text-color);
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: 0.25rem;
            cursor: pointer;
        }

        .file-input-container input[type="file"]:focus + .file-input-text::before {
            content: "Cliquez pour choisir un fichier";
        }
    `]
})

export class FormLayoutComponent {
    taskForm: FormGroup;

    task: any = {
        taskName: '',
        developer: '',
        category: '',
        taskDescription: '',
        estimatedHours: '',
        startDate: '',
        endDate: '',
        status: '',
        priority: '',
        assignedUserId:'',
        assignedUserEmail:''

    };
    assignees: any[] = [

        {name: 'Développeur', code: 'user1'},
        {name: 'Designer', code: 'user2'},
        {name: 'Ingénieur', code: 'user3'},]
    priorities: string[] = ['Basse', 'Normale', 'Haute']; // Options pour la priorité
    statuses: string[] = ['À faire', 'En cours', 'Terminée']; // Options pour l'état
    categories: any[] = [
        {name: 'Analyse de projet', value: 'analyse'},
        {name: 'Développement', value: 'developpement'},
        {name: 'Design', value: 'design'},
        {name: 'Tests', value: 'tests'}];

    constructor(private http: HttpClient, private fb: FormBuilder, private taskService: TaskService) {
        this.taskForm = this.fb.group({
            taskName: ['', Validators.required],
            developer: ['', Validators.required],
            category: ['', Validators.required],
            taskDescription: ['', Validators.required],
            estimatedHours: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            status: ['', Validators.required],
            priority: ['', Validators.required],
            assignedUserEmail:['', Validators.required],
            assignedUserId:['', Validators.required]

        });

    }

    ngOnInit(): void {
    }


    onSubmit() {
        const selectedDeveloperName = this.taskForm.value.developer.name;
        //const newTask = this.taskForm.value;
        const newTask = {

            taskName: this.taskForm.value.taskName,
            developer: selectedDeveloperName,
            category: this.taskForm.value.category.value,
            taskDescription: this.taskForm.value.taskDescription,
            estimatedHours: this.taskForm.value.estimatedHours,
            startDate: this.taskForm.value.startDate,
            endDate: this.taskForm.value.endDate,
            status: this.taskForm.value.status,
            priority: this.taskForm.value.priority,
            assignedUserEmail:this.taskForm.value.assignedUserEmail,
            assignedUserId:this.taskForm.value.assignedUserId
        };




        console.log("New Task Data:", newTask);
        this.http
            .post('http://localhost:8080/api/tasks', newTask)
            .pipe(
                catchError(error => {
                    console.error('Error while adding task:', error);
                    // Handle error, maybe show an error message
                    return throwError(error);
                })
            )
            .subscribe(
                () => {
                    console.log("Task added successfully")
                    this.taskService.tasks.push(newTask);
                    // Réinitialisez la formulaire ou effectuez d'autres actions nécessaires
                    this.taskForm.reset();
                }
                    );
                }



}
