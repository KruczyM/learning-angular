import { BrowserModule} from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AddComponent} from './funkcjonalnosci/add/add.component';
import { TodoTaskComponent} from './funkcjonalnosci/todo-task/todo-task.component';
import { DoneTaskComponent} from './funkcjonalnosci/done-task/done-task.component';

import { HttpService } from './seriwsy/http.service';
import {LogService} from './seriwsy/log.service';
import {TasksService} from './seriwsy/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TranformTaskPipe } from './shared/tranform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './auth/login/login.component';

const config = {
  apiKey: 'AIzaSyAN8UJcqCgjprh_1SoSslT7zbBSye27uZ8',
  authDomain: 'nauka-angular-6c5c3.firebaseapp.com',
  databaseURL: 'https://nauka-angular-6c5c3.firebaseio.com',
  projectId: 'nauka-angular-6c5c3',
  storageBucket: 'nauka-angular-6c5c3.appspot.com',
  messagingSenderId: '472080583784'
};



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TranformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [LogService,TasksService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
