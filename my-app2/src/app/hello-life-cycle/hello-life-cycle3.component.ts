import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

// 父组件
@Component({
  selector: 'app-after-view-father',
  template: `
    <app-after-view-cont>
      <app-after-view-child ></app-after-view-child>
    </app-after-view-cont>
  `
})
export class AfterViewFatherComponent implements OnInit {
  // count = 0;

  constructor() { }

  ngOnInit(): void { }
}

// 子组件 <ng-content></ng-content>确定内容投影的位置(即从组件外部导入的html内容，并插入组件模板中指定位置上)，会触发AfterConentInit
@Component({
  selector: 'app-after-view-cont',
  template: `
    <div>-- projected content begins --</div>
    <ng-content></ng-content>
    <div>-- projected content ends --</div>
  `
})
export class AfterViewContComponent implements OnInit, AfterContentInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked...');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit...');
  }
  constructor() { }

  ngOnInit(): void { }
}
// 子组件
@Component({
  selector: 'app-after-view-child',
  template: `
    <div>
      <input [(ngModel)]="count"/> --- {{ count }}
    </div>
  `
})
export class AfterViewChildComponent implements OnInit {
  count = 1;
  constructor() { }

  ngOnInit(): void { }
}