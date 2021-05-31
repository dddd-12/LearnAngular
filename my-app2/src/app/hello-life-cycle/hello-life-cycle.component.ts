import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

// 父组件
@Component({
  selector: 'app-hello-life-cycle',
  template: `
    <button (click)="add()">add</button>
    <app-hello-life-cycle-child [num]="num" [age]="age"></app-hello-life-cycle-child>
  `
})
export class HelloLifeCycleComponent implements OnInit {
  num = 100;
  age = 12;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.num++;
  }

}

// 子组件
@Component({
  selector: 'app-hello-life-cycle-child',
  template: `
    <div>{{num}} -- {{age}}</div>
  `
})
export class HelloLifeCycleChildComponent implements OnInit, OnChanges, DoCheck{
  @Input() num; //拿到父组件的传值
  @Input() age; //拿到父组件的传值
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("===================");
    console.log('num changes...', changes);
    console.log("===================");
  }
  ngDoCheck(): void{
    console.error('Docheck');
  }
}

