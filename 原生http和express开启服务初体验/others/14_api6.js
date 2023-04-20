// let http = require("http"); // 导入 http 模块
const mysql = require("mysql2"); // 导入 mysql 数据库模块
const express = require("express");

// 配置数据库链接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yjc010203.",
  port: 3306,
  database: "demo1",
});

connection.connect();
let data = {};
connection.query(
  "select * from demo1.userInfo where id = 6",
  (err, res, field) => {
    if (err) {
      throw Error("the connect is errow!");
    }
    data = JSON.stringify(res);
  }
);
connection.end(); // 结束数据库链接

const app = express();

app.all("*", function (req, res) {
  res.header("Content-Type", "text/html;charset=utf-8");
  res.end(data);
});

app.listen(7006, () => {
  console.log("server at http://127.0.0.1:7006");
});
