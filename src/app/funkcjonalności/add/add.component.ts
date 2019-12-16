import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TasksService } from '../../seriwsy/tasks.service';
import { Task } from '../../model/task';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  private repeatString: string = '';

  constructor(private taskService : TasksService) { }

  ngOnInit() {
    this.taskService.getRepeatTaskObs().subscribe((warn:string) =>{
      this.repeatString = warn;
    });

    this.addForm = this.initForm();
  }

  initForm(): FormGroup{
    return new FormGroup({
      taskName: new FormArray([new FormControl(null)],Validators.required),
    })
  }

  add(){
    console.log("jestem");
    const tasksList: Array<Task> = this.createTaskList();
    this.taskService.add(tasksList);
    this.addForm = this.initForm();

  }

  createTaskList(): Array<Task>{
    const tasksList = new Array<Task>();
    const taskArr = <[string]>this.addForm.get('taskName').value;
    taskArr.forEach(taskName=>{
      const task = {name: taskName, created: new Date().toLocaleString(), isDone:false };
      tasksList.push(task);
    })
    return tasksList;
  }
  addField(){
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null,Validators.required));
  }
}
