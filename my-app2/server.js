var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 解析json参数
app.use(bodyParser.json());
// 创建application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({extended: true}));
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
var user = [
  {name: 'zhangsan', age: 10},
  {name: 'lisi', age: 12},
  {name: 'Tim', age: 13},
  {name: 'Tom', age: 14}
];

app.get('/', function(req, res) {
  res.end('Hello World!');
});
app.get('/user', function(req, res) {
  res.json(user);
  res.end();
});
app.get('/user/add', function(req, res) {
  console.log("===============");
  console.log('get请求参数',req.query);
  console.log("===============");
  res.json(req.query);
  res.end();
});
app.post('/user/update', function (req,res) {
  console.log(req.query);
  console.log(req.body.name);
  res.json(Object.assign(req.body, req.query));
  res.end();
})
var server = app.listen(80, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})