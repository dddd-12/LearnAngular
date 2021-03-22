// 引入ng核心包的组件
import { Component } from '@angular/core';
// 注解-在es7中叫装饰器，用来定义方法或者类的信息（组件）
/* 
  定义组件模板的两种方式：
  1.使用templateUrl引用一个html文件
  2.使用template+es6模板字符串
*/
/*
  定义组件样式的两种方式：
  1.使用styleUrls引用一个css文件
  2.使用style +ES6 的模板字符串
*/
//元数据（metadata）--最基础最开始的，告诉angular如何处理一个类用装饰器（decorator）来附加元数据给一个类（class），ng将其视为一个组件
@Component({ //--decorator
  selector: 'app-root', //当前组件的引用地址-将组件渲染到app-root中   
  // templateUrl: './app.component.html', //组件模板
  template: `
    <h1>hello ES6 的模板字符串---{{title}}</h1><hr>
    <hello-world></hello-world><hr>
    <hello-everyone></hello-everyone>
  `,
  // styleUrls: ['./app.component.css'] //组件的样式文件
  styles: [`h1{color:#369;}`]
})
export class AppComponent { //--class组件类，导出：组件名称
  title = 'My first angular project: my-app';
}
