import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  template: `
    <p>The double 11 day is {{ birthday | date: 'yyyy-MM-dd' }}</p>
    <p>The double 11 day is {{ birthday | date: format }}</p>
    <button (click)="toggle()">toggle</button>
    <p>The double 11 day is {{ birthday | date | uppercase }}</p>
    <p>The double 11 day is {{ birthday | date | uppercase | myWord:'>>>--':'-->' }}</p>
  `
})
export class BirthdayComponent implements OnInit {
  birthday = new Date(2017, 10, 11); //Dec 11, 2017
  flag = true;
  get format() {
    return this.flag? 'yyyy-MM-dd' : 'yyyy/MM/dd';
  }
  toggle() {
    this.flag = !this.flag;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
