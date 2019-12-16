import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { TodoTaskComponent } from './funkcjonalnosci/todo-task/todo-task.component';
import { DoneTaskComponent } from './funkcjonalnosci/done-task/done-task.component';

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent
  },
  {
    path: 'doneTask',
    component: DoneTaskComponent
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
