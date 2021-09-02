import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule,
    ButtonModule
  ]
})
export class NavbarModule { }
