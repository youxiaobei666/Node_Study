const express = require("express");

const app = express();

// 获取请求时携带的id参数, http://localhost:8080/home:12345
// 注意请求时是一定要有参数不然不会响应
app.get("/home:id", (req, res) => {
  res.send("你的请求参数为" + req.params.id); // 12345
});

// 默认 1314
app.get("/home", (req, res) => {
  // 没有参数重定向
  res.redirect("http://localhost:8080/home:1314");
});

app.listen(8080, () => {
  console.log("服务开启在 8080 端口");
});
