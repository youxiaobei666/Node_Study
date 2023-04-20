let http = require("http"); // 导入 http 模块
const mysql = require("mysql2"); // 导入 mysql 数据库模块
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yjc010203.",
  port: 3306,
  database: "demo1",
});

connection.connect();
let data = {};
connection.query("SELECT * FROM demo1.userinfo", (err, res, field) => {
  if (err) {
    throw Error("the connect is errow!");
  }

  data = JSON.stringify(res);

  console.log(data);
});

connection.end();

http
  .createServer((request, response) => {
    // 发送 http头 部
    // http 状态值 200 : OK
    // 内容类型：text/plain
    // response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    // 发送响应式数据
    response.end(data);
  })
  .listen(7001);

console.log("Server running at http://127.0.0.1:7001");
