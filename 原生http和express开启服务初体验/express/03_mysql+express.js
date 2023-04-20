/**
 * 请求
 */
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yjc010203.",
  database: "demo1",
});

connection.connect();

let data = "";
connection.query("select * from demo1.userinfo", (err, res) => {
  if (err) {
    throw Error("错误");
  }
  data = JSON.stringify(res); // 存储数据
});

connection.end();

/**
 * 服务端
 */
const express = require("express");

const app = express();

// 路由 ‘/’，方法为 get
app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html;charset=utf-8");
  // * 设置可跨域
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  //   res.header("Access-Control-Allow-Headers", "content-type");
  res.send(data); // 返回数据
});

app.listen(8080, () => {
  console.log("服务开启在 8080 端口");
});
