import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../demo/components/auth/service/AuthService";
  // Remplacez par le vrai chemin vers votre service d'authentification
@Injectable({
    providedIn: 'root'
})
export class DeveloperGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        const userRole = this.authService.getLoggedInUserRole();
        if (userRole === 'developpeur') {
            return true;
        } else {
            // Redirigez l'utilisateur vers une page d'accès non autorisé (par exemple)
            this.router.navigate(['/unauthorized-access']);
            return false;
        }
    }
}
