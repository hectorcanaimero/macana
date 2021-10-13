import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Table } from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { ClipboardService } from 'ngx-clipboard'

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { EncurtadorService } from '@modules/encurtador/services/encurtador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('dt') dt: Table;
  loading: boolean = true;
  proccess: boolean = false;
  isLoading: boolean = false;

  url: string;
  basicData: any;
  basicOptions: any;

  formUrl: FormGroup;
  items$: Observable<any>;
  public list: string[] = [];
  clip: string = '';

  constructor(
    private fb: FormBuilder,
    private clipboardApi: ClipboardService,
    private scrollToService: ScrollToService,
    private encurtadorService: EncurtadorService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.items$ = this.encurtadorService.getUrls();
    this.basicData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        { label: 'My First dataset', backgroundColor: '#42A5F5', data: [65, 59, 80, 81, 56, 55, 40] }
      ]
    };
  }

    createUrl = () => {
    this.isLoading = true;
    if (this.formUrl.invalid) return;
    const value = this.formUrl.value;
    if (this.proccess) {
      this.proccess = false;
      this.encurtadorService.updateUrl(value.id, value).subscribe((res) => {
        this.items$ = this.encurtadorService.getUrls().pipe(finalize(() => this.proccess = false));
      });
    } else {
      this.encurtadorService.createUrl(value).subscribe((res) => {
        this.url = res.shorty
        this.items$ = this.encurtadorService.getUrls().pipe(finalize(() => this.proccess = false));
      });
    }
    this.items$ = this.encurtadorService.getUrls().pipe(finalize(() => this.proccess = false));
    this.isLoading = false;
  }

  editURL = (item: any) => {
    this.proccess = true;
    this.formUrl.patchValue({ url: item.url, shorty: item.shorty, id: item._id });
    const config: ScrollToConfigOptions = { offset: 20, duration: 650, target: 'url', easing: 'easeOutElastic', };
    this.scrollToService.scrollTo(config);
  }
  deleteUrl = (shorty: string) => {
    this.encurtadorService.removeUrl(shorty).subscribe(() => this.items$ = this.encurtadorService.getUrls());
  }

  reverseButton = () => {
    this.proccess = false;
    this.formUrl.reset();
  }

  copyText = () => {
    this.clip = 'copiado';
    this.clipboardApi.copyFromContent(`https://cndr.me/${this.url}`);
  }

  copyText2 = (shorty?: string) => {
    this.clipboardApi.copyFromContent(`https://cndr.me/${shorty}`);
    this.clip = 'copiado';
  }

  loadForm = () => this.formUrl = this.fb.group({ 'url': ['', [Validators.required]], 'shorty': [''], 'id': [''] });

  clear = (table: Table) => table.clear();

  applyFilterGlobal = (event: any, stringVal: string) => this.dt.filterGlobal((event.target as HTMLInputElement).value, stringVal);
}
