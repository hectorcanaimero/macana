import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccessComponent } from './access.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ACCESS_ROUTE } from './access.routes';

@NgModule({
  declarations: [
    AccessComponent,
    SignInComponent,
  ],
  imports: [
    CardModule,
    FormsModule,
    ACCESS_ROUTE,
    CommonModule,
    ButtonModule,
    LottieModule,
    InputTextModule,
    ReactiveFormsModule,
  ]
})
export class AccessModule { }
