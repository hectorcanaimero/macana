import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { BreadModule } from '@core/widgets/bread/bread.module';
import { NavbarModule } from '@core/widgets/navbar/navbar.module';
import { SidebarModule } from '@core/widgets/sidebar/sidebar.module';

import { PAGES_ROUTE } from './pages.routes';
import { PagesComponent } from './pages.component';
@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PAGES_ROUTE,
    BreadModule,
    NavbarModule,
    CommonModule,
    SidebarModule,
    ScrollPanelModule,
  ]
})

export class PagesModule { }
