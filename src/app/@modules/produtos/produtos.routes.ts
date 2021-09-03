import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from '@modules/produtos/produtos.component';

const app: Routes = [
  {
    path: '', component: ProdutosComponent,
    children: [
      {
        path: 'dash',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'campanhas',
        loadChildren: () => import('./pages/campanhas/campanhas.module').then(m => m.CampanhasModule)
      },
    ]
  }
];

export const PRODUTOS_ROUTE = RouterModule.forChild(app);
