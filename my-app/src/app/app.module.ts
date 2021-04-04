import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //引用小组件，在declarations中声明
// 引入组件
import { HelloWorldComponent } from './hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { HelloCssComponent } from './hello-css/hello-css.component';
import { HelloBindComponent } from './hello-bind/hello-bind.component';
import { HelloSelfEventComponent } from './hello-self-event/hello-self-event.component';
import { HelloSelfChild } from './hello-self-event/hello-self-child.component';
import { HelloTwoWayComponent } from './hello-two-way/hello-two-way.component';
import { HelloInputOutputComponent } from './hello-input-output/hello-input-output.component';
import { HelloInputChild } from './hello-input-output/hello-input.component';
import { HelloTemplateComponent } from './hello-template/hello-template.component';
import { HelloSelfDirectiveComponent } from './hello-self-directive/hello-self-directive.component';
import { AppHighlightDirective } from "./highlight.directive.component"

@NgModule({ //装饰器函数：用于接收一个描述模块属性的元数据对象
  // 使用组件时必须先声明组件
  declarations: [//声明本模块中拥有的视图类--组件、指令、管道
    AppComponent,
    HelloWorldComponent,
    HelloEveryoneComponent,
    HelloCssComponent,
    HelloBindComponent,
    HelloSelfEventComponent,
    HelloSelfChild,
    HelloTwoWayComponent,
    HelloInputOutputComponent,
    HelloInputChild,
    HelloTemplateComponent,
    HelloSelfDirectiveComponent,
    AppHighlightDirective
  ],
  imports: [ //引入本模块需要的类，兼容性组件-其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //服务的创建者，并加入到全局服务列表中，可用于应用部分
  bootstrap: [AppComponent] //指定应用的主视图（称为根组件），它是所有其他视图的宿主，只有根模块才可以设置bootstrap属性（引导组件-AppComponent）
})
export class AppModule { }
