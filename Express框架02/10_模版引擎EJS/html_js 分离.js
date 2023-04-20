const express = require("express");
const fs = require("fs");
const app = express();

// 1. 导入
const ejs = require("ejs");

// 2. 定义一个变量，后面使用
const arr = [1, 2, 3, 4, 5];

// 3. 读取html 文件 ~用 toString() 方法 buffer 转字符串
const html = fs.readFileSync("./index.html").toString();

// 4. 使用 EJS 的渲染
let result = ejs.render(html, { arr: arr });

// 5. 把 html 响应给客户端
app.get("/html", (req, res) => {
  res.send(result);
});

// 开启服务
app.listen(8080, () => {
  console.log("服务开启");
});
