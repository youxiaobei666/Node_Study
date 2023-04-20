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
//生成n位数字字母混合字符串
function generateMixed(n) {
  var chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.floor(Math.random() * 36);
    res += chars[id];
  }
  return res;
}

connection.connect();

let data = null;
let token = generateMixed(50);
connection.query("select * from demo1.userInfo where id = 1;", (err, res) => {
  if (err) {
    throw Error("the connect is errow!");
  }
  console.log(res);
  res[1] = token;
  data = JSON.stringify(res);
  console.log(data);
});

connection.end(); // 结束数据库链接

const app = express();

app.all("*", function (req, res) {
  res.end(data);
});

app.listen(7001, () => {
  console.log("server at http://127.0.0.1:7001");
});
