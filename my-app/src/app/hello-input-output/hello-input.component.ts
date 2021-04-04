import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello-input-child',
  template: `
    <hr>
    <h3 (click)="childChange()">Input组件：{{myNum}}</h3>
  `
})
export class HelloInputChild implements OnInit {

  // @Input() num2; //父组件传给子组件的值
  @Input('num') myNum;//自定义名称
  @Output() myChange = new EventEmitter(); //事件触发对象--用于触发父组件的事件的事件对象

  childChange(){
    this.myChange.emit(8);//payload:载荷（传参）
  }

  constructor() { }

  ngOnInit(): void { }
}
