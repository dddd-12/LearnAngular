import { Injectable } from '@angular/core';

@Injectable()
export class LoggerBetterService {
  log(text){
    console.log("=========日志记录==========");
    console.log(text, new Date().toLocaleString());
    console.log("=========日志记录==========");
  }
}