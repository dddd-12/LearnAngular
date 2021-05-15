import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-style-type',
  templateUrl: './hello-style-type.component.html',
  styleUrls: ['./hello-style-type.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
  encapsulation: ViewEncapsulation.None
})
export class HelloStyleTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
