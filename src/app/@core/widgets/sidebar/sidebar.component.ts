import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StorageMap } from '@ngx-pwa/local-storage';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];
  items2: MenuItem[] = [];
  name: string;
  @Input() value = false;

  constructor(
    private storage: StorageMap
  ) { }

  async ngOnInit() {
    const user = await this.storage.get('user').toPromise();
    this.name = this.getName(user);
    timer(350).subscribe(() => {
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
              label: 'Logs',
              icon: 'pi pi-fw pi-chart-bar',
              routerLink: '/pages/aplicativo/logs'
            }
          ]
        }
      ]

      this.items2 = [
        {
          tooltip: 'Home',
          icon: 'pi pi-pw pi-home',
          routerLink: '/pages/dash'
        },
        {
          tooltip: 'Encurtador',
          icon: 'pi pi-pw pi-link',
          items: [
            {
              tooltip: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: '/pages/encurtador/dash'
            },
            {
              tooltip: 'Relatorio',
              icon: 'pi pi-fw pi-chart-bar',
              routerLink: '/pages/encurtador/todos'
            }
          ]
        },
        {
          tooltip: 'Números da Sorte',
          icon: 'pi pi-pw pi-money-bill',
          items: [
            {
              tooltip: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: ''
            },
            {
              tooltip: 'Campanhas',
              icon: 'pi pi-fw pi-table',
              routerLink: ''
            },
            {
              tooltip: 'Relatorio',
              icon: 'pi pi-fw pi-chart-bar',
              routerLink: ''
            }
          ]
        },
        {
          tooltip: 'Produtos',
          icon: 'pi pi-pw pi-shopping-cart',
          items: [
            {
              tooltip: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: '/pages/produtos/dash'
            },
            {
              tooltip: 'Campanhas',
              icon: 'pi pi-fw pi-ticket',
              routerLink: '/pages/produtos/campanhas'
            },
            {
              tooltip: 'Produtos',
              icon: 'pi pi-fw pi-eye',
              routerLink: '/access/signIn'
            },
            {
              tooltip: 'Favoritos',
              icon: 'pi pi-fw pi-star',
              routerLink: '/access/signIn'
            },
            {
              tooltip: 'Mercadologico Web',
              icon: 'pi pi-fw pi-book',
              routerLink: '/access/signIn'
            },
            {
              tooltip: 'Mercadologico Web',
              icon: 'pi pi-fw pi-book',
              routerLink: '/access/signIn'
            }
          ]
        },
        {
          tooltip: 'Aplicativo',
          icon: 'pi pi-pw pi-mobile',
          items: [
            {
              tooltip: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: '/pages/aplicativo/dash'
            },
            {
              tooltip: 'Logs',
              icon: 'pi pi-fw pi-chart-bar',
              routerLink: '/pages/aplicativo/logs'
            }
          ]
        }
      ]
    });
  }

  getName = (user: any) => {
    let name = user.name;
    name = name.split(' ');
    if (name.length > 1) name = name[0].slice(0, 1) + name[1].slice(0, 1);
    else name = name[0].slice(0, 1);
    return name;
  }
}
