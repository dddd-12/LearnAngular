import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-input-output',
  template: `
    <h3>父组件：{{num}}</h3>
    <app-hello-input-child [num]="num" (myChange)="changeNum($event)"></app-hello-input-child>
  `
})
export class HelloInputOutputComponent implements OnInit {
  num = 12;
  constructor() { }

  ngOnInit(): void {
  }

  // 事件接收载荷，要使用$event接收
  changeNum(n){
    // this.num++;
    console.log('子组件传来的值，',n);
    this.num = n;
  }

}
