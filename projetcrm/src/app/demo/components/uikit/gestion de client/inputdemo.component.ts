import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';
import {Client} from "../../shared/Client";
import {ClientService} from "../../../service/ClientService";

@Component({
    templateUrl: './inputdemo.component.html',
    styles: [`
        .file-upload {
            display: inline-block;
        }

        .custom-file-upload {
            display: inline-block;
            padding: 10px 20px;
            cursor: pointer;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        .custom-file-upload:hover {
            background-color: #2980b9;
        }

        #providedDocuments {
            display: none;
        }

    `]

})
export class InputDemoComponent implements OnInit {

    client: Client = { id: 0, name: '', address: '', phone: '', email: '', workRequested: '', specificRequirements: '',
        providedDocuments: null,
        deadline: ''  };
    @Output() clientAdded: EventEmitter<Client> = new EventEmitter<Client>();
    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input?.files) {
            this.client.providedDocuments = Array.from(input.files);
        }
    }



    constructor(private clientService: ClientService) { }

    onSubmit() {
        this.clientService.addClient(this.client).subscribe((response) => {
            console.log('Client ajouté :', response);
            this.clientAdded.emit(response);
            // Réinitialiser le formulaire
            this.client = { id: 0, name: '', address: '', phone: '', email: '' , workRequested: '' , specificRequirements: '',
                providedDocuments: null,
                deadline: ''};
        });
    }

    ngOnInit(): void {
    }
}
