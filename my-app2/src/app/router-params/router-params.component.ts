import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-router-params',
  template: `<p>参数是：{{id}}</p>`
})
export class RouterParamsComponent implements OnInit, DoCheck {
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
