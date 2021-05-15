import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-style',
  templateUrl: './hello-style.component.html',
  styleUrls: ['./hello-style.component.css'],
  // styles:[
  //   `p{font-size:24px;}`,
  //   `*{color:red}`
  // ]
})
export class HelloStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
