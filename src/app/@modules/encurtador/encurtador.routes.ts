import { RouterModule, Routes } from '@angular/router';
import { EncurtadorComponent } from './encurtador.component';

const app: Routes = [
  {
    path: '', component: EncurtadorComponent,
    children: [
      {
        path: 'dash',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule)
      },
    ]
  }
];

export const ENCURTADOR_ROUTE = RouterModule.forChild(app);
