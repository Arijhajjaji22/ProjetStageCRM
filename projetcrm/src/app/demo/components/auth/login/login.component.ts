import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../service/AuthService';
import { Router } from '@angular/router';
import { User } from './User';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';





@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`

        :host ::ng-deep .p-password input {
            width: 100%;
            padding: 1rem;
        }

        :host ::ng-deep .pi-eye {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    user: User = new User('', '');
    valCheck: string[] = ['remember'];
    errorMessage: string = '';
    email: string = '';
    password: string = '';

    constructor(public layoutService: LayoutService, public authService: AuthService, private router: Router) {

    }
    // login() {
    //     if (!this.isValidEmail(this.user.email)) {
    //         this.errorMessage = 'Email non valide';
    //         return;
    //     }
    //     const credentials = {
    //         email: this.user.email,
    //         password: this.user.password
    //     };
    //
    //     const isAuthenticated = this.authService.login(credentials);
    //
    //     if (isAuthenticated) {
    //         console.log('Connexion réussie !');
    //         this.router.navigate(['/mydashboard']);
    //         // Rediriger vers la page de tableau de bord ou d'accueil
    //     } else {
    //         console.log('Échec de la connexion. Email ou mot de passe incorrect.');
    //         this.errorMessage = 'Email ou mot de passe incorrect.';
    //     }
    // }
    login() {
        const { email, password } = this.user;
        if (!this.isValidEmail(email)) {
            this.errorMessage = 'Email non valide';
            return;
        }

        const isAuthenticated = this.authService.loginWithRole(email, password);

        if (isAuthenticated) {
            console.log('Connexion réussie !');
            // Rediriger vers la page appropriée en fonction du rôle
            this.redirectToDashboard(email);
        } else {
            console.log('Échec de la connexion. Email ou mot de passe incorrect.');
            this.errorMessage = 'Email ou mot de passe incorrect.';
        }
    }

    redirectToDashboard(email: string) {
        // Vous pouvez implémenter la redirection en fonction de l'email
        if (email === 'arij@esprit.tn') {
            this.router.navigate(['/mydashboard']);
        } else if (email === 'developpeur@example.com') {
            this.router.navigate(['/developer-dashboard']);
        } else if (email === 'ingenieur@example.com') {
            this.router.navigate(['/engineer-dashboard']);
        } else if (email === 'designer@example.com') {
            this.router.navigate(['/designer-dashboard']);
        }
    }



    isValidEmail(email: string): boolean {
        // Vérifier si l'email fait partie des emails valides
        const validEmails = ['arij@esprit.tn','developpeur@example.com','designer@example.com','ingenieur@example.com'];

        return validEmails.includes(email);
    }


    /* this.authService.login(credentials).subscribe(
         (response) => {
             console.log('Réponse de la connexion:', response); // Afficher la réponse en cas de succès
             // Connexion réussie
             if (response.success === 'true') {
                 console.log('Connexion réussie !');
                 this.router.navigate(['/mydashboard']); // Rediriger vers la page de tableau de bord ou d'accueil
             } else {
                 console.log('Email ou mot de passe incorrect.');
                 // Gérer l'erreur d'authentification
             }
         },
         (error) => {
             console.error('Erreur de connexion:', error); // Afficher l'erreur en cas d'échec
             // Gérer l'erreur d'authentification
         }
     );
 }*/
    /*onLoginSubmit() {

       // console.log('Valeur de l\'email:', this.user.email);
       // console.log('Valeur du mot de passe:', this.user.password);

        if (!this.user.email || !this.user.password) {
            // Vérifier si les champs email et password sont remplis
            this.errorMessage = 'Veuillez saisir l\'email et le mot de passe.';
           // console.log('Veuillez saisir l\'email et le mot de passe.');
            return;
        }
        console.log('Valeur de l\'email:', this.user.email);
        console.log('Valeur du mot de passe:', this.user.password);

        // console.log('Données d\'authentification envoyées au backend:', this.user);


        // Faire une requête au backend pour vérifier les informations d'identification
        this.authService.login(this.user)
            .pipe(
                catchError((error) => {
                    // Gérer les erreurs en cas de problème de connexion au backend
                    console.error('Échec de la connexion.', error);
                    this.errorMessage = 'Échec de la connexion. Veuillez réessayer plus tard.';
                    return throwError(error); // Renvoie l'erreur pour que le composant puisse la traiter
                })
            )
            .subscribe((response: any) => {
                // Le backend a renvoyé une réponse réussie, et vous pouvez traiter les données ici
               console.log('Réponse du backend:', response);

                // Exemple de traitement de la réponse - assurez-vous d'adapter ceci à votre backend
                if (response.success === 'true') {
                    // Connexion réussie, rediriger vers la page de tableau de bord ou d'accueil
                    console.log('Connexion réussie !');
                    this.router.navigate(['/mydashboard']);
                } else {
                    // Le mot de passe ne correspond pas ou l'utilisateur n'existe pas
                    console.log('Email ou mot de passe incorrect.');
                    this.errorMessage = 'Email ou mot de passe incorrect.';
                }
            });
    }
    getUserByEmail(email: string): void {
        this.authService.getUserByEmail(email)
            .pipe(
                catchError((error) => {
                    console.error('Erreur lors de la récupération de l\'utilisateur par e-mail.', error);
                    return throwError(error);
                })
            )
            .subscribe((user: User | null) => {
                if (user) {
                    console.log('Utilisateur trouvé:', user);
                } else {
                    console.log('Aucun utilisateur trouvé avec cet e-mail.');
                }
            });
    }*/
}
