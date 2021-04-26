import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//引入Address
import { Address } from './Address'

@Component({
  selector: 'app-hello-formbuilder',
  templateUrl: './hello-formbuilder.component.html',
  styleUrls: ['./hello-formbuilder.component.css']
})
export class HelloFormbuilderComponent implements OnInit {

  userForm: FormGroup;//初始化
  //Address数组---与Address{}数据结构一致的数组
  addressArr: Address[] = [
    {street: 'road 207', city:'shanghai'},
    {street: 'road 567', city:'beijing'},
  ];
  
  constructor(private fb: FormBuilder) { 
    this.userForm = fb.group({//对应表单各个控件
      name: ['Tim', Validators.required],
      pwd: ['123456', Validators.minLength(6)],
      address: fb.group({//多级group
        street: ['road 207', Validators.required],
        city: 'shanghai'
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('表单提交');
    console.log('valid',this.userForm.valid);
    console.log(this.userForm.value);
  }
  forceReset(){
    this.userForm.reset();//重置为空
  }
  user = {
    name:'Tim',
    pwd:'123456',
    address:{
      street:'road 207',
      city:'shanghai'
    }
  }
  defaultReset(){ //恢复默认值
    this.userForm.reset(this.user)
    // this.userForm.reset({
    //   name:'Tim',
    //   pwd:'123456',
    //   address:{
    //     street:'road 207',
    //     city:'shanghai'
    //   }
    // });
  }
  setFormValue(){
    this.userForm.setValue({
      name:'abc',
      pwd:'666666',
      address: this.addressArr[1]
    });
  }
  patchFormValue(){
    this.userForm.patchValue({
      address: this.addressArr[1]
    });
  }

}
