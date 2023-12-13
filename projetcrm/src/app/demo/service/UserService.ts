// userservice.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../components/shared/User";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/users';  // Mettez à jour vers '/api/users'


    constructor(private http: HttpClient) {}

    addUser(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/add`, user).pipe(
            map(response => response.message)
        );
    }
    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}`);
    }

    deleteUser(userId: number | undefined): Observable<void> {
        const url = `${this.apiUrl}/${userId}`;
        return this.http.delete<void>(url);
    }
    getTasksByRole(role: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.apiUrl}?role=${role}`);
    }
}
