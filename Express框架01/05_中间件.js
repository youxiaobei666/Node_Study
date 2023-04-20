const express = require("express");
const app = express();
const fs = require("fs");

/**
 * 中间件本身就是就是一个函数，接收三个参数，req,res ,next
 * 他的作用就是简化操作和代码
 * 一般分为两个类型，全局和路由中间件
 * 1. 全局
 * 每一个请求到服务端之后都会执行全局中间件函数
 * 2. 路由中间件
 * 在每一个请求值得路由的请求发生后执行的中间件函数
 */

// 定义全局中间件，实现功能每次有访问就记录 ip 和 请求路径 （全局中间件的案例）
const GlobalMV = (req, res, next) => {
  // 获取 ip 和路径
  let { hostname, url } = req;
  // 存储数据
  fs.appendFileSync("./access.log", `${hostname}  ${url} \r\n`);
  next(); // 执行之后的函数
};

// 定义路由中间件，实现权限认证（路由中间件的案例）
const roterMV = (req, res, next) => {
  // 根据查询参数password确定密码权限  http://localhost:8080/home?password=001223
  if (req.query.password === "001223") {
    console.log("密码正确");
    next(); // 执行之后的函数
  } else {
    res.send("密码错误");
  }
};

// 全局中间件，需要 use 注册
app.use(GlobalMV);

// 局部中间件
app.get("/home", roterMV, (req, res) => {
  res.send("响应体");
});

app.listen(8080, () => {
  console.log("服务开启");
});
