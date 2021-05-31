import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user.service';
import { User } from '../service/user';

@Component({
  selector: 'app-hello-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">
        姓名：{{user.name}}，年龄：{{user.age}}
      </li>
    </ul>
  `,
  // providers: [UserListService] //局部注册服务
})
export class HelloUserListComponent implements OnInit {

  // 通过构造器进行依赖注入
  constructor(private userListService: UserListService) { 

  }
  users: User[];
  ngOnInit(): void {
    // 数据初始化
    this.users = this.userListService.getUsers();
  }

}
