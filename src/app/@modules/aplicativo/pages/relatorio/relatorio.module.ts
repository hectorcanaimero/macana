import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';
import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  { path: '', component: RelatorioComponent }
]

@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(app),
  ]
})
export class RelatorioModule { }
