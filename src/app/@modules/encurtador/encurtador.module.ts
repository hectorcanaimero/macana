import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncurtadorComponent } from './encurtador.component';
import { ENCURTADOR_ROUTE } from './encurtador.routes';



@NgModule({
  declarations: [
    EncurtadorComponent
  ],
  imports: [
    CommonModule,
    ENCURTADOR_ROUTE,
  ]
})
export class EncurtadorModule { }
