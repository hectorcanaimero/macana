import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicativoComponent } from './aplicativo.component';

import { APLICATIVO_ROUTE } from './aplicativo.routes';

@NgModule({
  declarations: [
    AplicativoComponent
  ],
  imports: [
    CommonModule,
    APLICATIVO_ROUTE
  ]
})
export class AplicativoModule { }
