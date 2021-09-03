import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import { Observable } from 'rxjs';
import { EncurtadorService } from '@modules/encurtador/services/encurtador.service';
import { Table } from 'primeng/table';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = false;
  basicData: any;
  basicOptions: any;
  url: string;
  items$: Observable<any>;
  formUrl: FormGroup;

  public list: string[] = [];

  constructor(
    private fb: FormBuilder,
    private encurtadorService: EncurtadorService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    console.log(uuid().slice(0,4));
    this.loadForm();
    this.items$ = this.encurtadorService.getUrls();
    this.items$.subscribe((res) => console.log(res));
    this.basicData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          }
      ]
    };
  }

  createUrl = () => {
    this.isLoading = true;
    if (this.formUrl.invalid) return;
    this.encurtadorService.createUrl(this.formUrl.value).subscribe((res) => {
      this.url = res.shorty;
      console.log(this.url);
      this.isLoading = false;
      this.items$ = this.encurtadorService.getUrls();
    })
  }

  deleteUrl = (event: any, shorty: string) => {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Vai appagar esse URL',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('YES => ', shorty);
        this.encurtadorService.removeUrl(shorty).subscribe((res) => {
          this.items$ = this.encurtadorService.getUrls();
        })
      }
  });
  }

  loadForm = () => {
    this.formUrl = this.fb.group({ 'url': ['', [Validators.required]]})
  }
  clear = (table: Table) => table.clear();
}
