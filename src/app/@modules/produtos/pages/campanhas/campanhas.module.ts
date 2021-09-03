import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhasComponent } from './campanhas.component';
import { RouterModule, Routes } from '@angular/router';

const app: Routes = [
  { path: '', component: CampanhasComponent }
]

@NgModule({
  declarations: [
    CampanhasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(app)
  ]
})
export class CampanhasModule { }
