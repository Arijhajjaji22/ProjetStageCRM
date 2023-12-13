import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLayoutComponent } from './formlayout.component';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlayoutRoutingModule } from './formlayout-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CalendarModule} from "primeng/calendar";


@NgModule({
    imports: [
        CommonModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        CalendarModule,
        ReactiveFormsModule,
        FormlayoutRoutingModule
    ],
    declarations: [FormLayoutComponent]
})
export class FormlayoutModule { }
