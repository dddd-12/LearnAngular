import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent implements OnInit {
  user = {name:'', pwd:''};
  myGroup = null;
  constructor() { }

  ngOnInit(): void {
    //初始化插件
    this.myGroup = new FormGroup({//对应DOM表单的内存模块
      // 内存对象与DOM的绑定关系
      'name' : new FormControl(this.user.name, [
        Validators.required, //必填项
        Validators.minLength(4)
      ]),//指定初始值
      'pwd' : new FormControl(this.user.pwd, [
        Validators.required, //必填项
        Validators.minLength(6)
      ]),
    });
  }
  get name(){
    return this.myGroup.get('name');
  }
  onSubmit(){
    console.log('表单提交');
    console.log('valid',this.myGroup.valid);
    console.log(this.myGroup.value);
  }

}
