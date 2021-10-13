import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';

const app: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'dash',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'encurtador',
        loadChildren: () => import('@modules/encurtador/encurtador.module').then(m => m.EncurtadorModule)
      },
      {
        path: 'produtos',
        loadChildren: () => import('@modules/produtos/produtos.module').then(m => m.ProdutosModule)
      },
      {
        path: 'aplicativo',
        loadChildren: () => import('@modules/aplicativo/aplicativo.module').then(m => m.AplicativoModule)
      }
    ]
  }
];

export const PAGES_ROUTE = RouterModule.forChild(app);
