import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from "./demo/components/auth/login/login.component";
import {MydashboardComponent} from "./demo/components/mydashboard/mydashboard.component";

import {EngineerDashboardComponent} from "./engineer-dashboard/engineer-dashboard.component";
import {DesignerDashboardComponent} from "./designer-dashboard/designer-dashboard.component";
import {DeveloperGuard} from "./guards/DeveloperGuard";


 // Importez le composant LoginComponent ici

const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full' // Redirection vers la page de connexion par défaut
    },
    {
        path: 'login', component: LoginComponent // Route vers la page de connexion
    },

 //   { path: 'developer-dashboard', component: DeveloperDashboardComponent, canActivate: [DeveloperGuard] },
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
            { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            // New Update Template
            { path: 'mydashboard', component: MydashboardComponent },

            {path:'engineer-dashboard',component:EngineerDashboardComponent},
            {path:'designer-dashboard',component:DesignerDashboardComponent}



        ],
    },
    { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'pages/notfound', component: NotfoundComponent },
    { path: '**', redirectTo: 'pages/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
