import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task} from "../components/shared/Task";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl = 'http://localhost:8080/api/tasks'; // Remplacez par l'URL de votre backend
    tasks: Task[] = [];
    constructor(private http: HttpClient) {}

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }
    deleteTask(taskId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${taskId}`);
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }
    updateTask(id: number, task: Task): Observable<Task> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Task>(url, task);
    }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
    }
    getTasksForUser(email: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.apiUrl}/tasks?email=${email}`);
    }
}

