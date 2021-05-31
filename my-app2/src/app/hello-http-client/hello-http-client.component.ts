import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-hello-http-client',
  template: `
    <ul>
      <li *ngFor="let res of results">
        {{ res.name }} -- {{ res.age }}
      </li>
    </ul>
  `
})
export class HelloHttpClientComponent implements OnInit {
  results: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 请求数据
    // const url = 'http://localhost/user2';
    // // subscribe 处理返回数据
    // this.http.get(url).subscribe(data => {
    //   this.results = data;
    // });
    // // 获取完整的响应
    // this.http.get(url, { observe: 'response'}).subscribe(data => {
    //   console.log(data);
    //   console.log(data.body);
    // }, (err: HttpErrorResponse) => {
    //   if(err.error instanceof Error){
    //     console.log('客户端出错：', err.error.message);
    //   }else {
    //     console.log(`服务器返回码 ${err.status}, 返回html: ${err.error}`);
    //   }
    // });

    // 访问非JSON数据
    let url = "http://localhost";
    this.http.get(url, {responseType: 'text'}).subscribe(data => {
      console.log(data);
    });

    // get传参
    url = "http://localhost/user/add?num=2";
    let user = {name: 'Tim'};
    this.http.get(url, {params: user}).subscribe(data => {
      console.log(data);
    });

    // post传参
    url = "http://localhost/user/update";
    user = { name: 'Jack'};
    this.http.post(url, user, {params: new HttpParams().set('id', '1')}).subscribe(data => {
      console.log(data);
    });

  }

}
