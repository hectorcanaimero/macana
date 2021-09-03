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
            label: 'Relatorio',
            icon: 'pi pi-fw pi-chart-bar',
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
            routerLink: ''
          },
          {
            label: 'Campanhas',
            icon: 'pi pi-fw pi-table',
            routerLink: ''
          },
          {
            label: 'Relatorio',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ''
          }
        ]
      },
      {
        label: 'Produtos',
        icon: 'pi pi-pw pi-shopping-cart',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pages/produtos/dash'
          },
          {
            label: 'Campanhas',
            icon: 'pi pi-fw pi-ticket',
            routerLink: '/pages/produtos/campanhas'
          },
          {
            label: 'Produtos',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/access/signIn'
          },
          {
            label: 'Favoritos',
            icon: 'pi pi-fw pi-star',
            routerLink: '/access/signIn'
          },
          {
            label: 'Mercadologico Web',
            icon: 'pi pi-fw pi-book',
            routerLink: '/access/signIn'
          },
          {
            label: 'Mercadologico Web',
            icon: 'pi pi-fw pi-book',
            routerLink: '/access/signIn'
          }
        ]
      },
      {
        label: 'Aplicativo',
        icon: 'pi pi-pw pi-mobile',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pages/aplicativo/dash'
          },
          {
            label: 'Relatorio',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: '/pages/aplicativo/relatorio'
          }
        ]
      }
    ]
  }

}
