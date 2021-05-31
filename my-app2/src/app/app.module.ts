import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LifeCycleChildComponent, lifecycleComponent } from './hello.lifecycle.component';
import { HelloLifeCycleComponent, HelloLifeCycleChildComponent } from './hello-life-cycle/hello-life-cycle.component';
import { HelloLifeCycle2Component } from './hello-life-cycle/hello-life-cycle2.component';
import { AfterViewFatherComponent, AfterViewContComponent, AfterViewChildComponent } from './hello-life-cycle/hello-life-cycle3.component';
import { BirthdayComponent } from './hello-pipe/hello-pipe.component';
import { HelloUserListComponent } from './hello-user-list/hello-user-list.component';
import { myWordPipe } from './hello-pipe/hello-self.pipe';
import { UserListService } from './service/user.service';
import { LoggerService } from './service/logger.service';
import { LoggerBetterService } from './service/loggerBetter.service';
import { HelloHttpClientComponent } from './hello-http-client/hello-http-client.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterParamsComponent } from './router-params/router-params.component';
// 引入路由模块
import { AppRoutingModule } from './app-routing.module';
import { RouterFunctionComponent } from './router-function/router-function.component';

let silentLogger = {
  log: (text) => {
    console.log("========使用值提供商========");
    console.log(`Logger: ${text} `+ new Date().toLocaleString());
    console.log("========使用值提供商========");
  }
};
// 路由配置
// const appRoutes: Routes = [
//   { path: 'hello', component: HelloWorldComponent, 
//     children: [
//       { path: 'helloeveryone', component: HelloEveryoneComponent},
//       { path: 'routerparams/:id', component: RouterParamsComponent}
//     ]
//   },
//   { path: 'hello2', redirectTo:'/hello', pathMatch:'full' },
//   { path: '**', component: PageNotFoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent, 
    LifeCycleChildComponent,
    lifecycleComponent,
    HelloLifeCycleComponent,
    HelloLifeCycleChildComponent,
    HelloLifeCycle2Component,
    AfterViewFatherComponent, 
    AfterViewContComponent, 
    AfterViewChildComponent, 
    BirthdayComponent,
    myWordPipe,
    HelloUserListComponent,
    HelloHttpClientComponent,
    HelloWorldComponent,
    HelloEveryoneComponent,
    PageNotFoundComponent,
    RouterParamsComponent,
    RouterFunctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, //路由模块
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserListService, 
    // {provide: LoggerService, useClass: LoggerBetterService}, //替换旧服务
    // {provide: LoggerService, useValue: silentLogger} //使用值提供商
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
