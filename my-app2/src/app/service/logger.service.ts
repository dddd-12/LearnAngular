import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(text){
    console.log("=========日志记录==========");
    console.log(text);
    console.log("=========日志记录==========");
  }
}