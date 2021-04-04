import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-everyone',
  templateUrl: './hello-everyone.component.html',
  styleUrls: ['./hello-everyone.component.css']
})
export class HelloEveryoneComponent implements OnInit {
  flag=true;
  citys = ['shanghai','beijing','hangzhou'];//在组件中定义一个数组
  fruits = [
    {id:1, name:'apple'},
    {id:2, name:'banner'},
    {id:3, name:'orange'}
  ];
  char = 'A';
  constructor() { }

  ngOnInit(): void {
  }

}
