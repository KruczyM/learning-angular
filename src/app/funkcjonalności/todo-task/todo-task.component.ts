import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { LogService } from '../../seriwsy/log.service';
import { TasksService } from '../../seriwsy/tasks.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {

  /*
  //Przed serwisami

  @Input()
  tasksList = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();
  */

  private tasksList: Array<Task> = [];

  constructor(private log: LogService, private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter( t=> t.isDone === false);
    });
  }

  ngOnInit() {}

  remove(task: Task) {
    //this.emitRemove.emit(task);
    this.taskService.remove(task);
  }

  done(task: Task) {
    //this.emitDone.emit(task);
    this.taskService.done(task);
  
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

  save(){
    this.taskService.saveTasksInDb();
  }
}
