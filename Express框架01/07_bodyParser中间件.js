/**
 * 获取请求体的中间件，bodyParser, 把请求的参数解析好，添加到 req.body 对象上
 * npm i body-parser 下载插件
 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 解析 string 格式的
app.use(bodyParser.urlencoded({ extended: false })); // 全局使用

// 解析 json 格式的
app.use(bodyParser.json());

// 返回一个表格提交，实现post
app.get("/login", (req, res) => {
  res.send(
    "<h2>登陆</h2><form method='post' action='/login'><input text='用户名' name='username'></input><input text='密码' name='password'></input><button>登陆</button></form>"
  );
});

app.post("/login", (req, res) => {
  // 获取请求体，body-parser 插件会添加一个 req.body 对象
  res.send(req.body);
});

app.listen(8080, () => {
  console.log("服务开启");
});
