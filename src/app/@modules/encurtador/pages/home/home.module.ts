import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { ClipboardModule } from 'ngx-clipboard';

import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const app: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ChartModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ClipboardModule,
    ConfirmPopupModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    RouterModule.forChild(app)
  ]
})
export class HomeModule { }
