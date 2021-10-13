import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  options: AnimationOptions = { path: 'https://assets9.lottiefiles.com/private_files/lf30_t5KSeU.json'};

  constructor() { }

  ngOnInit(): void {
  }

}
