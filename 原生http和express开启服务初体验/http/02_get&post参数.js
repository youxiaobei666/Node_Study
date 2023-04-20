const http = require("http");

/**
 * 监听客户端请求事件,回调函数接收请求 req 和结果 res 参数
 */
const server = http.createServer((req, res) => {
  console.log("客户端请求了一次");
  const url = req.url; // 请求的地址
  const method = req.method; // 请求的方法
  const responseMessage = `地址是 ${url},方法是 ${method}`; // 响应体
  
  // 使用 setHeader 方法设置相应头可解决乱码问题
  res.setHeader("Content-type", "text/html; charset=utf-8");

  res.end(responseMessage); // res.end() 回应客户端
});

// 启动服务器
server.listen(8080, () => {
  console.log("服务器启动成功！");
});
