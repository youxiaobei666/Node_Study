/**
 * 之前我们响应客户端都是先读文件再返回用户文件，这是很不方便，
 * 我们采用静态资源中间件后可以简化很多
 * express.static('路径')
 */

const express = require("express");
const app = express();

// 注册static目录为静态资源中间件
const staticMV = express.static("./static");
app.use(staticMV);

// 启动服务，可直接访问静态资源
app.listen(8080, () => {
  console.log("服务启动");
});
