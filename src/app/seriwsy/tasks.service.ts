import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {Task } from '../model/task';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private repeatTask: string = '';

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  private repeatTaskObs = new Subject<string>();

constructor(private httpService: HttpService) {
  this.httpService.getTask().subscribe(list =>{
    this.tasksListObs.next(list);
  });


}


add(task: Array<Task>) {


    this.repeatTask = '';
    this.repeatTaskObs.next(this.repeatTask);
    const list = this.tasksListObs.getValue().concat(task);
    let noRepeat = true;

    list.slice(0,(list.length-task.length)).forEach((e) => {
      task.forEach(en=>{
        e.name.toLowerCase() === en.name.toLowerCase() ? noRepeat = false : e;
      });      
    });

    for(let i = 0; i < task.length; i++){
      for(let j = i+1; j < task.length; j++){
        task[i].name.toLocaleLowerCase() === task[j].name.toLocaleLowerCase()  ? noRepeat = false : null;
      }
    }

    if (noRepeat == true)
    {
      this.tasksListObs.next(list);
    }
    else
    {
      this.repeatTask = "zadania nie mogą się powtarzać"
      this.repeatTaskObs.next(this.repeatTask);
    }

}

getRepeatTaskObs(): Observable<string>{
  return this.repeatTaskObs.asObservable();  
}

done(task: Task) {
  task.end = new Date().toLocaleString();
  task.isDone = true;
  const list = this.tasksListObs.getValue();
  this.tasksListObs.next(list);
}

remove(task: Task) {
  const list = this.tasksListObs.getValue().filter(e => e !== task);
  this.tasksListObs.next(list);
}

getTaskListObs():Observable<Array<Task>>{
  return this.tasksListObs.asObservable();
}

saveTasksInDb(){
  this.httpService.saveTasks(this.tasksListObs.getValue());
}



}
