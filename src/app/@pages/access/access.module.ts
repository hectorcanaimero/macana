import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ACCESS_ROUTE } from './access.routes';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccessComponent,
    SignInComponent
  ],
  imports: [
    ACCESS_ROUTE,
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
  ]
})
export class AccessModule { }
