import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Composants',
                items: [
                    { label: 'Gestion des taches ', routerLink: ['/uikit/formlayout'] },
                    { label: 'Gestion des clients', routerLink: ['/uikit/input'] },
                    { label: 'Gestion des factures', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Gestion des utilisateurs', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Gestion des réunions', routerLink: ['/uikit/button'], class: 'rotated-icon' },
                    { label: '', routerLink: ['/uikit/table'] },
                    { label: '', routerLink: ['/uikit/list'] },
                    { label: '', routerLink: ['/uikit/tree'] },
                    { label: '', routerLink: ['/uikit/panel'] },
                    { label: '', routerLink: ['/uikit/overlay'] },
                    { label: '', routerLink: ['/uikit/media'] },
                    { label: '', routerLink: ['/uikit/menu'], preventExact: true },
                    { label: '', routerLink: ['/uikit/message'] },
                    { label: '', routerLink: ['/uikit/file'] },
                    { label: '', routerLink: ['/uikit/charts'] },
                    { label: '', routerLink: ['/uikit/misc'] },
                    { label: '', routerLink: ['/mydashboard'] }
                ]
            },
            {
                label: '',
                items: [
                    { label: '', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: '', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: '',
                items: [
                    { label: '', routerLink: ['/utilities/icons'] },
                    { label: '', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: '',

                routerLink: ['/pages'],
                items: [
                    {
                        label: '',

                        routerLink: ['/landing']
                    },
                    {
                        label: '',


                    },
                    {
                        label: '',

                        routerLink: ['/pages/crud']
                    },
                    {
                        label: '',

                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: '',

                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: '',

                        routerLink: ['/pages/empty']
                    },
                ]
            },
            {
                label: '',

            },
            {
                label: '',

            }
        ];
    }
}
