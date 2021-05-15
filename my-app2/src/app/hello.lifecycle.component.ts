import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

// 子组件
@Component({
  selector: 'app-lifecycle-child',
  template: `
    <div>
      <input type="text" [(ngModel)]="count">
      <p>count: {{count}}</p>
    </div>
  `
})
export class LifeCycleChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() count;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes...', changes);
  }
  ngOnInit() {
    console.log('init...');
  }
  ngDoCheck(): void {
    console.log('check...');
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit...');
  }
  ngAfterContentChecked(): void {
    console.log('afterContentChecked...');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit...');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked...');
  }
  ngOnDestroy(): void {
    console.log('destroy...');
  }

}

// 父组件
@Component({
  selector: 'app-lifecycle',
  template: `
    <div>
      <div>
        <button (click)="changes()">changes</button>
        <button (click)="init()">init</button>
        <button (click)="destroy()">destroy</button>
      </div>
      <div *ngIf="flag">
        <app-lifecycle-child [count]="count"></app-lifecycle-child>
      </div>
    </div>
  `
})
export class lifecycleComponent {
  count = 0;
  flag = true;
  changes() {
    this.count++;
  }
  destroy() {
    this.flag = false;
  }
  init(){
    this.flag = true;
  }
}