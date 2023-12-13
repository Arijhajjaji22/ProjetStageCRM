import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importez le composant LoginComponent pour la redirection par défaut
import { LoginComponent } from './login/login.component';

import {EngineerDashboardComponent} from "../../../engineer-dashboard/engineer-dashboard.component";
import {DesignerDashboardComponent} from "../../../designer-dashboard/designer-dashboard.component";
import {DeveloperGuard} from "../../../guards/DeveloperGuard";




const routes: Routes = [
    // Définissez la redirection par défaut vers la page de connexion (LoginComponent)
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
    { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

   // { path: 'developer-dashboard', component: DeveloperDashboardComponent, canActivate: [DeveloperGuard] },

    // { path: 'engineer-dashboard', component: EngineerDashboardComponent, canActivate: [EngineerGuard] },
    // { path: 'designer-dashboard', component: DesignerDashboardComponent, canActivate: [DesignerGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
