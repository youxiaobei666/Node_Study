const http = require("http");
const fs = require("fs");
const app = http.createServer();

const path = __dirname; // 资源的根路径，方便资源的更新移动

/**
 * 每次请求都回执行回调，根据请求的路径响应对应的资源，如果没有就响应 404 NOTFOUND 页面
 */
app.on("request", (request, response) => {
  if (request.url === "/") {
    fs.readFile(path + "/demo.html", (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }
      // 不报错就返回html 文件
      response.end(data);
    });
  } else if (request.url === "/demo.css") {
    fs.readFile(path + "/demo.css", (err, data) => {
      response.end(data); // 返回 css 文件
      return;
    });
  } else if (request.url === "/demo.js") {
    fs.readFile(path + "/demo.js", (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }
      response.end(data); // 返回 js 文件
    });
  } else {
    response.setHeader("Content-type", "text/html;charset=utf-8"); // 解决乱码
    response.end("404 NOTFOUND 页面"); // 返回404
  }
});

app.listen("8080", () => {
  console.log("服务开启");
});
