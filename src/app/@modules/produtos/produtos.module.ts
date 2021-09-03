import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUTOS_ROUTE } from './produtos.routes';
import { ProdutosComponent } from './produtos.component';



@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    PRODUTOS_ROUTE,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProdutosModule { }
