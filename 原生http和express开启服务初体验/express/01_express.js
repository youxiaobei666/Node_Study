// 导入 express 模块
const express = require("express");

// 初始化实例
const app = express();

// app.use((req, res, next) => {
//   const time = Date.now();
//   // 把时间共享给后面的所有路由
//   req.startTime = time;
//   next();
// });

// 定义中间件后面使用
const mv = (req, res, next) => {
  const time = Date.now();
  // 把时间共享给后面的所有路由
  req.startTime = time;
  next();
};

// 根路径 使用中间件
app.get("/", [mv], (req, res) => {
  res.send("Home page." + req.startTime);
});

// user路径 使用中间件
app.get("/user", [mv], (req, res) => {
  res.send("User page." + req.startTime);
});

app.listen(8080, () => {
  console.log("服务已开启");
});
