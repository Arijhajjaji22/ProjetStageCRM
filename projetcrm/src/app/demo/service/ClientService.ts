import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Client} from "../components/shared/Client";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private apiUrl = 'http://localhost:8080/api/clients'; // Remplacez par votre URL API
    private clientAddedSubject: Subject<Client> = new Subject<Client>();
    constructor(private http: HttpClient) { }

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.apiUrl);
    }
    deleteClient(clientId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
    }

    addClient(client: Client): Observable<Client> {
       // return this.http.post<Client>(this.apiUrl, client);
        const observable = this.http.post<Client>(this.apiUrl, client);
        observable.subscribe(response => {
            this.clientAddedSubject.next(response); // Émet l'événement avec le client ajouté
        });
        return observable;
    }

    getClientAddedObservable(): Observable<Client> {
        return this.clientAddedSubject.asObservable();
    }
}
