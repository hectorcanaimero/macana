import { Observable } from 'rxjs';
import { AppService } from './../../services/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {
  logs$: Observable<any[]>;
  @ViewChild('dt') dt: Table;
  display: boolean = false;
  log: any = [];
  logTitulo: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.logs$ = this.appService.getLogs();
    this.logs$.subscribe((res) => console.log(res));
  }

  erroMessage = (item: any) => JSON.parse(item[0].error);

  clear = (table: Table) => table.clear();

  applyFilterGlobal = (event: any, stringVal: string) => this.dt.filterGlobal((event.target as HTMLInputElement).value, stringVal);

  showDialogLogs = (item: any) => {
    this.log = item;
    this.logTitulo = item.url.split('/').slice(-1)
    this.display = true;
  }
}
