import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../login/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //private apiUrl = 'http://localhost:8080';
    private loggedInUserRole: string = '';  // Le rôle de l'utilisateur connecté
    private loggedInUserEmail: string = '';  // L'email de l'utilisateur connecté
    isAuthenticated: boolean = false;
    private userRoles: { [email: string]: string } = {
        'arij@esprit.tn': 'arij',
        'developpeur@example.com': 'developpeur',
        'ingenieur@example.com': 'ingenieur',
        'designer@example.com': 'designer'
    };



   // constructor() {}
    validEmails: string[] = [ 'arij@esprit.tn'];
    constructor() {
        this.addUserRole('arij@esprit.tn', 'arij');
    }

    addUserRole(email: string, role: string): void {
        this.userRoles[email] = role;

    }

    // login(credentials: any): boolean {
    //     // Simuler l'authentification en interne
    //     if (this.validEmails.includes(credentials.email) && credentials.password === 'arij') {
    //         this.isAuthenticated = true;
    //         // Déterminer le rôle en fonction de l'email
    //         this.loggedInUserRole = credentials.email === 'arij@esprit.tn' ? 'admin' : 'user';
    //         this.loggedInUserEmail = credentials.email;
    //         return true;
    //     }
    //     return false;
    //
    // }
    getRoleForEmail(email: string): string | undefined {
        return this.userRoles[email];
    }

    getDashboardUrlForRole(role: string): string {
        switch (role) {
            case 'admin':
                return '/admin-dashboard';
            case 'developpeur':
                return '/developpeur-dashboard';
            case 'ingenieur':
                return '/ingenieur-dashboard';
            case 'designer':
                return '/designer-dashboard';
            default:
                return '/mydashboard'; // Redirection par défaut
        }
    }

    // login(credentials: any): boolean {
    //     const role = this.userRoles[credentials.email];
    //
    //     if (role && credentials.password === 'password') {  // Assumer que le mot de passe est 'password' pour tous les utilisateurs
    //         this.isAuthenticated = true;
    //         this.loggedInUserRole = role;
    //         this.loggedInUserEmail = credentials.email;
    //         return true;
    //     }
    //     return false;
    // }


    // addUserRole(email: string, role: string): void {
    //     this.userRoles[email] = role;
    // }
    login(email: string, password: string): boolean {
        const role = this.userRoles[email];

        if (role && password === 'password') {
            this.isAuthenticated = true;
            this.loggedInUserRole = role;
            this.loggedInUserEmail = email;
            return true;
        }
        return false;
    }


    logout(): void {
        this.isAuthenticated = false;
        this.loggedInUserRole = '';
        this.loggedInUserEmail = '';
    }
    getLoggedInUserRole(): string {
        return this.loggedInUserRole;
    }
    loginWithRole(email: string, password: string): string | null {
        const role = this.userRoles[email];
        if (role && password === 'arij') {
            return role;
        }
        return null;


    }

    // Méthode pour récupérer l'email de l'utilisateur connecté
    getLoggedInUserEmail(): string {
        return this.loggedInUserEmail;
    }

    // Méthode pour vérifier si un utilisateur est connecté
    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
    getUserRole(email: string): string | null {
        return this.userRoles[email] || null;
    }

    private validPasswords: { [email: string]: string } = {
        'arij@esprit.tn': 'arij',  // Mot de passe pour l'admin
        'developpeur@example.com': 'password_developpeur',
        'ingenieur@example.com': 'password_ingenieur',
        'designer@example.com': 'password_designer'
        // ... ajoutez d'autres e-mails et mots de passe ici
    };
    // login(email: string, password: string): boolean {
    //     const role = this.userRoles[email];
    //     const validPassword = this.validPasswords[email];
    //
    //     if (role && validPassword && password === validPassword) {
    //         this.isAuthenticated = true;
    //         this.loggedInUserRole = role;
    //         this.loggedInUserEmail = email;
    //         return true;
    //     }
    //
    //     return false;
    // }


    // constructor(private http: HttpClient) {}
    /*login(credentials: any): Observable<any> {
        console.log('Tentative de connexion avec les identifiants suivants:', credentials);

        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Erreur lors de la connexion:', error);
                // Gérer les erreurs de la requête ici
                // ...
                return new Observable<never>();
            })
        );
    }

    register(userData: any): Observable<any> {

        return this.http.post<any>(`${this.apiUrl}/registration`, userData).pipe(
            catchError((error: HttpErrorResponse) => {
                // Gérer les erreurs de la requête ici
                // ...
                return new Observable<never>();
            })
        );
    }

    getUserByEmail(email: string): Observable<User | null> {
        console.log('Tentative de récupération de l\'utilisateur avec l\'email:', email);
        return this.http.get<User>(`${this.apiUrl}/users?email=${email}`).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Erreur lors de la récupération de l\'utilisateur:', error);
                // Gérer les erreurs de la requête ici
                // ...
                return new Observable<User | null>((observer) => {
                    observer.next(null); // Si une erreur se produit, retourner null
                    observer.complete();
                });
            }),
            map((userFromDB: User | null) => {
                // Vérifier si l'utilisateur existe
                console.log('Utilisateur récupéré de la base de données:', userFromDB);
                return userFromDB ? userFromDB : null;
            })
        );
    }*/


}
