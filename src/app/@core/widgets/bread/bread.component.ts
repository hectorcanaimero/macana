import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.scss']
})
export class BreadComponent implements OnInit {

  items: MenuItem[];

  home: MenuItem;

  constructor(
    private router: Router
  ) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        this.onFunction(item.url)
      };
    });
  }

  ngOnInit(): void {}

  onFunction = (url: string) => {
    const path = this.router.url.split('/');
    path.shift();
    path.shift();
    const item: any = [];
    path.forEach((el) => item.push({label: el}));
    this.items = item;
    this.home = {icon: 'pi pi-home'};
  }

}
