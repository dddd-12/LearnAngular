import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-bind',
  templateUrl: './hello-bind.component.html',
  styleUrls: ['./hello-bind.component.css']
})
export class HelloBindComponent implements OnInit {
  imgUrl="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
  constructor() { }

  ngOnInit(): void {
  }

  hello(){
    console.log('hello cat')
    alert('Hello cat!!!')
  }
  show(event){ 
    console.log('show call');
    console.log(event);
    console.log(event.target);
  }
}
