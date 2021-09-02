import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-home',
        routerLink: '/pages/dash'
      },
      {
        label: 'Encurtador',
        icon: 'pi pi-pw pi-link',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pages/encurtador/dash'
          },
          {
            label: 'Todos',
            icon: 'pi pi-fw pi-table',
            routerLink: '/pages/encurtador/todos'
          }
        ]
      },
      {
        label: 'Números da Sorte',
        icon: 'pi pi-pw pi-money-bill',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/access/signIn'
          },
          {
            label: 'Todos',
            icon: 'pi pi-fw pi-table',
            routerLink: '/access/signIn'
          }
        ]
      },
      {
        label: 'Produtos',
        icon: 'pi pi-pw pi-shopping-cart',
        items: [
          {
            label: 'Dash',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: '/access/signIn'
          },
          {
            label: 'Ver',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/access/signIn'
          }
        ]
      }
    ]
  }

}
