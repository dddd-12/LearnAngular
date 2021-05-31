import { Injectable, Optional } from '@angular/core';
import { User } from './user';
import { LoggerService } from './logger.service';

@Injectable()
export class UserListService {
  // 模拟数据，前台就是ajax获取数据
  users: User[] = [
    {name: 'zhangsan', age: 10},
    {name: 'lisi', age: 12},
    {name: 'Tim', age: 13},
    {name: 'Tom', age: 14}
  ];

  // 依赖注入
  constructor(@Optional() private logger: LoggerService){}

  // 前台调用getUsers方法，后台返回用户数据
  getUsers(): User[]{
    if(this.logger){
      this.logger.log('获取数据。。。。');
    }
    return this.users;
  }
}