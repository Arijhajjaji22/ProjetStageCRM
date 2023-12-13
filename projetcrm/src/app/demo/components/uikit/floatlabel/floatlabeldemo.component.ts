import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import {Task} from "../../shared/Task";
import {InvoiceService} from "../../../service/InvoiceService";
import {Invoice} from "../../shared/Invoice";
import {Observable} from "rxjs";


@Component({
    templateUrl: './floatlabeldemo.component.html',
    styles: [`
        /* Style pour le formulaire */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        /* Style pour le titre */
        h2 {
            color: #428bca; /* Couleur bleue */
        }

        /* Style pour les champs de saisie et le bouton */
        input, textarea, button {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        /* Style pour le bouton d'ajout */
        button {
            background-color: #428bca; /* Couleur bleue */
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        button:hover {
            background-color: #357ebd; /* Couleur bleue légèrement plus foncée au survol */
        }


    `]
})
export class FloatLabelDemoComponent implements OnInit {

    newInvoice: Invoice = {
        invoiceNumber: '',
        amount: 0,
        clientName: '',
        invoiceDate: ''
    };
    pieData: any;


    invoices: Invoice[] = [];

    showAddFormFlag = false;
    searchTerm: string = '';
    searchedInvoices: Invoice[] = [];
    searchFilter: string = ''; // Le terme de recherche






    constructor(private invoiceService: InvoiceService) {
        this.pieData = {
            labels: [ 'Factures de faible montant', 'Factures de montant moyen', 'Factures de montant élevé'],
            datasets: [
                {
                    data: [300, 450, 100], // Remplacez par vos propres données
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };


    }

    ngOnInit() {
        this.invoiceService.getInvoices()
            .subscribe((invoices: Invoice[]) => {
                this.invoices = invoices;
                this.searchInvoices();

            });

    }



    showAddForm() {
        this.showAddFormFlag = true;
    }


    addInvoice() {
        this.invoiceService.addInvoice(this.newInvoice);
        this.newInvoice = { invoiceNumber: '', amount: 0, clientName: '', invoiceDate: '' };
        this.showAddFormFlag = false; // Hide the form after adding invoice
    }


    deleteInvoice(index: number) {
        this.invoiceService.deleteInvoice(index)
            .subscribe(() => {
                // Supprimez la facture du tableau local après suppression réussie
                this.invoices.splice(index, 1);
            });
    }
    searchInvoices() {
        console.log('Search Filter:', this.searchFilter);

        if (this.searchFilter) {
            // Faire la recherche en filtrant les factures
            this.invoiceService.getInvoices().subscribe(
                (invoices: Invoice[]) => {
                    this.invoices = invoices.filter(invoice =>
                        invoice.clientName.toLowerCase().includes(this.searchFilter.toLowerCase())
                    );
                },
                (error) => {
                    console.error('Erreur lors de la récupération des factures :', error);
                }
            );
        } else
            // Si la recherche est vide, afficher toutes les factures
            this.invoiceService.getInvoices().subscribe(
                (invoices: Invoice[]) => {
                    this.invoices = invoices;
                },
                (error) => {
                    console.error('Erreur lors de la récupération des factures :', error);
                }
            );
    }




    get invoicesf(): Observable<Invoice[]> {
        return this.invoiceService.getInvoices();
    }
}

