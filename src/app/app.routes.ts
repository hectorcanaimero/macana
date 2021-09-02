import { RouterModule, Routes } from '@angular/router';

const app: Routes = [
  { path: 'pages', loadChildren: () => import('./@pages/pages/pages.module').then(m => m.PagesModule) },
  { path: 'access', loadChildren: () => import('./@pages/access/access.module').then(m => m.AccessModule) }
];

export const APP_ROUTE = RouterModule.forRoot(app);
