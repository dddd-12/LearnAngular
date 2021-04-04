import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-css',
  templateUrl: './hello-css.component.html',
  styleUrls: ['./hello-css.component.css']
})
export class HelloCssComponent implements OnInit {
  cssObj = {'color':'yellow', 'font-size':'80px'};
  constructor() { }

  ngOnInit(): void {
  }

}
