// auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AccessComponent } from './access/access.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],

})
export class AuthModule { }
