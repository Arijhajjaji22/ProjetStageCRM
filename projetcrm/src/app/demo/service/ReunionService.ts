import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Client} from "../components/shared/Client";
import {Reunion} from "../components/shared/Reunion";

@Injectable({
    providedIn: 'root'
})
export class ReunionService {
    private apiUrl = 'http://localhost:8080/api/reunions';
    private reunionAddedSubject: Subject<Reunion> = new Subject<Reunion>();
    constructor(private http: HttpClient) { }

    // planifierReunion(reunion: any): Observable<any> {
    //     return this.http.post<any>(this.apiUrl, reunion);
    // }
    planifierReunion(reunion: Reunion): Observable<Reunion> {
        return this.http.post<Reunion>(this.apiUrl, reunion);
    }
    saveReunionChanges(reunion: Reunion): Observable<Reunion> {
        const url = `${this.apiUrl}/${reunion.id}`;
        return this.http.put<Reunion>(url, reunion);

    }
    getReunions(): Observable<Reunion[]> {
        return this.http.get<Reunion[]>(this.apiUrl);
    }
    deleteReunion(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}
