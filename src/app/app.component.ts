import { Component, ViewChild, OnInit } from '@angular/core';
import { LogService } from './seriwsy/log.service';
import {TasksService } from './seriwsy/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 

  constructor(private taskService : TasksService) {

   }

  ngOnInit(): void {}




}
