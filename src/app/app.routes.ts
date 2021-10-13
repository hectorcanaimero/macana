import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from '@pages/access/services/guard.guard';

const app: Routes = [
  { path: 'pages', loadChildren: () => import('./@pages/pages/pages.module').then(m => m.PagesModule), canActivate: [GuardGuard] },
  { path: 'access', loadChildren: () => import('./@pages/access/access.module').then(m => m.AccessModule) },
  { path: '', redirectTo: 'pages/dash', pathMatch: 'full' }
];

export const APP_ROUTE = RouterModule.forRoot(app);
