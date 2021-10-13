import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

import { LogsComponent } from './logs.component';

const app: Routes = [
  { path: '', component: LogsComponent }
]

@NgModule({
  declarations: [ LogsComponent ],
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    ConfirmPopupModule,
    ProgressSpinnerModule,
    CodeHighlighterModule,
    RouterModule.forChild(app),
  ]
})
export class LogsModule { }
