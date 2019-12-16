import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

constructor() { }


logger(log:string):void{
  console.log(log);
}

}
