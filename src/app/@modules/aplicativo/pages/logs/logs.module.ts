import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LogsComponent } from './logs.component';

const app: Routes = [
  { path: '', component: LogsComponent }
]

@NgModule({
  declarations: [ LogsComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(app),
  ]
})
export class LogsModule { }
