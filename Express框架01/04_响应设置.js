const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  // 1. http 兼容
  res.statusCode = 200;
  res.statusMessage = "xxx"; // 在响应码之后
  res.setHeader("header", "id header");
  res.write("响应体");
  res.end("xxx");

  // 2. express 的响应
  res.status(500); // 状态码
  res.set("xxx", "yyy"); // 设置一个 xxx 响应头
  res.send("express 的 send 方法不会乱码"); // 响应体
  res.status(300).set("xxx", "yyy").send("连贯的操作");

  // 3. 其他的功能
  res.redirect("http://youxiaobei.top"); // 重定向
  res.download("./文件名"); // 下载响应，启动下载
  res.json(); // 响应 JSON
  res.sendFile(__dirname + "/某个文件路径"); // 响应文件内容
});

app.listen(8080, () => {
  console.log("服务开启");
});
