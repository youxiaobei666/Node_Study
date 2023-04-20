const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  // 初始化 content 的值
  var content = "";
  // 根据请求路径，展示不同的页面内容
  if (url === "/" || url === "/index") {
    content = "<h2>首页</h2>";
  } else if (url === "/login") {
    content = "<h2>登陆页</h2>";
  } else {
    content = "<h2>404 NOT FOUND</h2>";
  }

  // 设置响应头,可解决乱码问题
  res.setHeader("Content-type", "text/html; charset=utf-8");
  // 回应客户端
  res.end(content);
});
// 开启服务器
server.listen("8080", () => {
  console.log("服务已开启");
});
