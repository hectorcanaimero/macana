import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output () active: EventEmitter<boolean> = new EventEmitter();

  user: any;
  items: MenuItem[] = [];
  value = false;

  constructor(
    private router: Router,
    private storage: StorageMap) { }

  async ngOnInit () {

    this.user = await this.storage.get('user').toPromise();
    this.items = [
      { icon:'', label:'', },
      { icon:'', label:'', },
      { icon:'', label:'', },
      { icon:'pi pi-fw pi-bars',  command: () => this.activeSidebar()},
    ];
  }

  activeSidebar = () => {
    this.value = !this.value;
    this.active.emit(this.value);
  }

  signOut = () => {
    this.storage.delete('user').subscribe(() => {});
    this.router.navigate(['access', 'signIn'])
  }
}
