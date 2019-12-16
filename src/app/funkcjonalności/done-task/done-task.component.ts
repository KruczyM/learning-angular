import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../../seriwsy/tasks.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  
  //@Input()  przed serwisem
  doneList: Array<Task> = [];


  constructor(private taskService : TasksService) {
    this.taskService.getTaskListObs().subscribe((tasksDone:Array<Task>) =>{
      this.doneList = tasksDone.filter(t => t.isDone === true);
    })
   }

  ngOnInit() {
  }



}
