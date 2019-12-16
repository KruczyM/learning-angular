import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angulat_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '3bMGmgDbiAElHIMmsM0filej7frNsuQ-');

  constructor(private http: HttpClient) {
    this.getTask();
   }

  getTask(): Observable<Array<Task>>{
    return this.http.get<Array<Task>>(this.URL_DB,{params: this.param});
  }

  saveTasks(list: Array<Task>){
    this.http.put(this.URL_DB,list,{params: this.param}).subscribe(list =>{
      console.log(list);
    });
  }




}
