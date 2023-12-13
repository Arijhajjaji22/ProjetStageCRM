import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
import { ButtonDemoComponent } from './buttondemo.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";

@NgModule({
    imports: [
        CommonModule,
        ButtonDemoRoutingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ToggleButtonModule,
        FormsModule,
        ConfirmDialogModule,
        DialogModule,
    ],
    declarations: [ButtonDemoComponent]
})
export class ButtonDemoModule { }
