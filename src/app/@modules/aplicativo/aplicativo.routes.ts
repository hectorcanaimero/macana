import { RouterModule, Routes } from '@angular/router';
import { AplicativoComponent } from './aplicativo.component';

const app: Routes = [
  {
    path: '', component: AplicativoComponent,
    children: [
      {
        path: 'dash',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'relatorio',
        loadChildren: () => import('./pages/relatorio/relatorio.module').then(m => m.RelatorioModule)
      },
      {
        path: 'logs',
        loadChildren: () => import('./pages/logs/logs.module').then(m => m.LogsModule)
      },
    ]
  }
];

export const APLICATIVO_ROUTE = RouterModule.forChild(app);
