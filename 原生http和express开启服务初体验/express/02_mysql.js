/**
 * 使用 mysql2 模块连接数据库
 */

const mysql = require("mysql2");

// 初始化实例，并传入配置对象
const connection = mysql.createConnection({
  // 配置连接参数
  host: "localhost", // 本地
  user: "root", // 用户
  password: "yjc010203.", // 密码
  port: 3306, // 端口
  database: "demo1", // 数据库的名称
});

// 开始连接
connection.connect();

// 定义一个请求语句 "SELECT * FROM demo1.userinfo"
const select_message = "SELECT * FROM demo1.userinfo";
// 使用 query 方法传入参数
connection.query(select_message, (err, res) => {
  if (err) {
    throw Error("the connect is errow!");
  }
  res = JSON.stringify(res);
  console.log(res);
});

connection.end(); // 结束连接
