import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';

const app: Routes = [
  { path: '', component: TodosComponent }
]

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(app)

  ]
})
export class TodosModule { }
