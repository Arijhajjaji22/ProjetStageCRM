import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../components/shared/Invoice";
import {Client} from "../components/shared/Client";
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    private apiUrl = 'http://localhost:8080/api/invoices';
    invoices: Invoice[] = [];
    private invoiceAddedSubject: Subject<Invoice> = new Subject<Invoice>();
    constructor(private http: HttpClient) { }





    getInvoices(): Observable<Invoice[]> {
        return this.http.get<Invoice[]>(this.apiUrl);
    }
    addInvoice(invoice: Invoice): Observable<Invoice> {
        // return this.http.post<Client>(this.apiUrl, client);
        const observable = this.http.post<Invoice>(this.apiUrl, invoice);
        observable.subscribe(response => {
            this.invoiceAddedSubject.next(response); // Émet l'événement avec le client ajouté
        });
        return observable;
    }


    deleteInvoice(index: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${index}`);
    }
}

