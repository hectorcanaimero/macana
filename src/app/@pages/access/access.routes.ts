import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const app: Routes = [
  { path: 'signIn', component: SignInComponent }
];

export const ACCESS_ROUTE = RouterModule.forChild(app);
