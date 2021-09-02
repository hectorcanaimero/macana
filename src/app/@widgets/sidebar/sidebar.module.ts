import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AvatarModule} from 'primeng/avatar';


@NgModule({
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ],
  imports: [
    CommonModule,
    AvatarModule,
    PanelMenuModule,
    ScrollPanelModule,
  ]
})
export class SidebarModule { }
