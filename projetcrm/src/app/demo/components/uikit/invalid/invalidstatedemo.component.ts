// invalidstatedemo.component.ts
import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/User";
import {UserService} from "../../../service/UserService";

@Component({
    templateUrl: './invalidstatedemo.component.html',
    styles: [`
    body {
        font-family: Arial, sans-serif;
padding: 20px;
}

h2 {
    color: #333;
}

form {
    max-width: 400px;
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

 `]
})
export class InvalidStateDemoComponent implements OnInit {
    user: User = {
        photo: null,
        nom: '',
        prenom: '',
        dateNaissance: null,
        genre: '',
        position: '',
        tel: '',
        email: '',
        adresse: '',
        availability: '',
        experienceLevel: '',
        username: '',
        hireDate: null,
        cv: null,
        portfolio: '',
        role:''
    };

    constructor(private userService: UserService) {}

    ngOnInit() {

    }

    onSubmit() {
        this.userService.addUser(this.user)
            .subscribe(message => {
                console.log('Message de succès :', message);
            }, error => {
                console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
            });
    }

}
