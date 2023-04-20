// 1. 获取数据库里的数据部分
const QueryError = require("mysql2"); // 导入错误类型,ts需要
const mysql2 = require("mysql2");
const express = require("express");

const connection = mysql2.createConnection({
  // 配置链接信息
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yjc010203.",
  database: "demo1",
});

// 那么开始链接
connection.connect((err) => {
  if (err) {
    console.log(err); // 如果错误，那么输出
  } else {
    console.log("数据库链接成功");
  }
});
let res = "";
// 查询数据
connection.query("select * from demo1.userInfo", (err, res) => {
  if (err) {
    // 如果出错
    console.log(err);
  } else {
    console.log("数据查询成功");
  }
  // 成功
  // 将json 对象格式的数据转换为字符串格式并储存
  res = JSON.stringify(res);
  console.log(res);
});
// 结束链接
connection.end();

// 2.服务部分
const web = express();
web.all("*", function (req, res) {
  res.header("Content-Type", "text/html; charset=utf-8"); //解决乱码
  // 设置可跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "content-type");
  // 返回数据
  res.end(res);
});

// 开启服务，设置端口
web.listen(0315, () => {
  console.log("服务已开启在端口:0315");
});
