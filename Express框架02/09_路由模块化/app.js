const express = require("express");
const app = express();

/**
 * 导入路由模块，然后 app.use() 使用
 */

const router = require("./routerModule");

// 使用
app.use(router);

app.listen(8080, () => {
  console.log("服务开启在 8080 端口");
});
