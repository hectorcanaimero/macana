import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTE } from './pages.routes';

import { NavbarModule } from '@widgets/navbar/navbar.module';
import { SidebarModule } from '@widgets/sidebar/sidebar.module';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PAGES_ROUTE,
    NavbarModule,
    CommonModule,
    SidebarModule,
    ScrollPanelModule,
  ]
})
export class PagesModule { }
