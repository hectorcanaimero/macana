import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

const app: Routes = [
  { path: '', component: TodosComponent }
]

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    LottieModule,
    RouterModule.forChild(app)

  ]
})
export class TodosModule { }
