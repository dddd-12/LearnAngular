import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterParamsComponent } from './router-params/router-params.component';
import { RouterFunctionComponent } from './router-function/router-function.component';

// 路由配置
const appRoutes: Routes = [
  { path: 'hello', component: HelloWorldComponent, 
    children: [
      { path: 'helloeveryone', component: HelloEveryoneComponent},
      { path: 'routerparams/:id', component: RouterParamsComponent}
    ]
  },
  { path: 'routerparams/:id', component: RouterParamsComponent},
  { path: 'routerparams/:id', component: RouterParamsComponent},
  { path: 'routerFunction', component: RouterFunctionComponent},
  { path: 'hello2', redirectTo:'/hello', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // appRoutes, { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}