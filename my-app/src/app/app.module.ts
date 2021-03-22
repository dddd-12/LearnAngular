import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //引用小组件，在declarations中声明
// 引入组件
import { HelloWorldComponent } from './hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';

@NgModule({ //装饰器函数：用于接收一个描述模块属性的元数据对象
  // 使用组件时必须先声明组件
  declarations: [//声明本模块中拥有的视图类--组件、指令、管道
    AppComponent,
    HelloWorldComponent,
    HelloEveryoneComponent
  ],
  imports: [ //引入本模块需要的类，兼容性组件-其他模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //服务的创建者，并加入到全局服务列表中，可用于应用部分
  bootstrap: [AppComponent] //指定应用的主视图（称为根组件），它是所有其他视图的宿主，只有根模块才可以设置bootstrap属性（引导组件-AppComponent）
})
export class AppModule { }
