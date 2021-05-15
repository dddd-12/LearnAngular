import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// 父子组件传值 父->子
@Component({
  selector: 'app-name-child',
  template:  `
    <div>{{name}}----{{age}}</div>
    <button (click)="changeFaAge()">btn</button>
  `
})
export class HelloChildComponent implements OnInit {

  @Output() myAgeChange = new EventEmitter();
  @Input() name;
  // @Input() age;
  // 属性拦截控制
  private _age;
  @Input()
  set age(age) {
    console.log('设置age..');
    this._age = age || 0;
  }
  get age(){
    console.log("获取age....");
    return this._age; 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  // 改变age
  changeFaAge(){
    console.log("child changeFaAge....");
    
    this.myAgeChange.emit();
  }

}

@Component({
  selector: 'app-hello-father-child',
  template:  `
  <!--
    <app-name-child [name]="name" [age]="age"></app-name-child>
    <hr>
    <app-name-child [name]="name" age></app-name-child>
    <hr>
  -->
    <p>父组件</p>
    <button (click)="child.changeFaAge()">调用child方法</button>
    <button (click)="controlChild()">@ViewChild调用child方法</button>
    <app-name-child #child [name]="name" [age]="age" (myAgeChange)="changeAge()"></app-name-child>
  `
})
export class HelloFatherChildComponent implements OnInit {

  name = "Kitty";
  age = 12;

  constructor() { }

  ngOnInit(): void {
  }

  changeAge(){
    console.log("father changeAge....");

    this.age = 99;
  }

  @ViewChild(HelloChildComponent)
  private child: HelloChildComponent; //child=模版中#child
  controlChild() {
    this.child.changeFaAge();
  }
}
