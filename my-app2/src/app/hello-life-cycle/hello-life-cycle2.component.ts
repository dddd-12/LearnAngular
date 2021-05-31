import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-hello-life-cycle2',
  template: `
    <input [(ngModel)]="count"/> ----- {{comment}}
  `
})
export class HelloLifeCycle2Component implements OnInit, AfterViewChecked {
  comment = '';
  count = 0;
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("afterViewChecked....");
    if(this.count > 1000){
      setTimeout(() => {
        this.comment = 'This is big number';
      }, 0); //下一轮js开始执行的时候触发
    }
    // 以下代码会报错，原因：在视图钩子中修改数据，违反单向数据流规则
    // if(this.count > 1000){
    //   this.comment = 'This is big number';
    // }
  }
  constructor() { }

  ngOnInit(): void { }
}
