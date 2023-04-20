/**
 *  http 模块
 */
const http = require("http");
// http.createServer() 创建服务器实例
const server = http.createServer();
// server.on()  监听客户端请求事件,回调函数接收请求和结果参数
server.on("request", (req) => {
  console.log("客户端请求了一次");
});
// 启动服务器
server.listen(8080, () => {
  console.log("服务器启动成功！");
});
