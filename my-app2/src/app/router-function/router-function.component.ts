import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-function',
  templateUrl: './router-function.component.html',
  styleUrls: ['./router-function.component.css']
})
export class RouterFunctionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hellorUrl(){
    this.router.navigateByUrl('hello/routerparams/12');
  }
  hellorLink(){
    this.router.navigate(['hello/routerparams', '13']); //传参
  }
}
