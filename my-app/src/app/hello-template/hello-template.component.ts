import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-template',
  templateUrl: './hello-template.component.html',
  styleUrls: ['./hello-template.component.css']
})
export class HelloTemplateComponent implements OnInit {

  text='';
  people=null;
  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    console.log('show: ',this.text);
  }
  showText02(text){
    console.log('showText02: ',text);
  }

}
