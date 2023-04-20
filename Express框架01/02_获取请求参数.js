const express = require("express");
const app = express();

/**
 * 获取请求参数的方法有两种，1、原生http 的 ，2、express 专属的
 */
app.get("/home", (req, res) => {
  // 1.原生 http
  console.log(req.url); // 获取请求的路径 /home?query ....
  console.log(req.method); // 获取请求的方法，GET ,实际上这里已经指定了是 get (app.get )
  console.log(req.httpVersion); // 获取 http 版本
  console.log(req.headers); // 获取请求头 1.1

  //2. express
  console.log(req.query); // 获取查询字符串 ?query='查询字符串' { query: "'查询字符串'" }
  console.log(req.get("host")); // 获取某个指定的请求头 localhost:8080

  res.send("响应体");
});

app.listen(8080, () => {
  console.log("服务开启");
});
