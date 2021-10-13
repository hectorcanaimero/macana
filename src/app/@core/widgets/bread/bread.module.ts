import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadComponent } from './bread.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [ BreadComponent ],
  exports: [ BreadComponent ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ]
})
export class BreadModule { }
