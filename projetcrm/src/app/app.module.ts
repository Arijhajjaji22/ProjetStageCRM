import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {AuthModule} from "./demo/components/auth/auth.module";
import { CookieService } from 'ngx-cookie-service';
//New TODO mydasboard
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {CsrfInterceptor} from "./demo/components/auth/service/csrf.interceptor";
import {AuthService} from "./demo/components/auth/service/AuthService";
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from "primeng/calendar";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {ChartModule} from "primeng/chart";
import {ConfirmationService, MessageService} from "primeng/api";

import { EngineerDashboardComponent } from './engineer-dashboard/engineer-dashboard.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
import { DeveloperDashboardComponent } from '../dev/developer-dashboard/developer-dashboard.component';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, EngineerDashboardComponent, DesignerDashboardComponent,  MydashboardComponent, DeveloperDashboardComponent
    ],
    imports: [
        HttpClientModule,
        ChartModule,
        ReactiveFormsModule,
        CalendarModule,
        FormsModule,
        ReactiveFormsModule,

        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN', // Nom du cookie contenant le jeton CSRF, assurez-vous que c'est le même que celui utilisé côté backend
            headerName: 'X-XSRF-TOKEN' // Nom de l'en-tête où le jeton CSRF sera envoyé avec chaque requête

        }),
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        CommonModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,

        FormsModule,
        ToolbarModule,
        FileUploadModule,
        DialogModule,
        InputNumberModule,
        ChartModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CsrfInterceptor,
            multi: true
        },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService,  AuthService,
        CookieService,ProductService,ConfirmationService,
        [DialogService],[MessageService]
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
