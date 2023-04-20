#!/usr/bin/env node

/**
 * 依赖
 */

var app = require("../app");
var debug = require("debug")("11-express:server");
var http = require("http");

/**
 * 从环境中获取端口并存储在 Express 中。
 */

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port); // 设置端口号

/**
 * 创建服务
 */

var server = http.createServer(app); // app.js 在这被创建服务

/**
 * 在所有网络接口上监听提供的端口。
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * 将端口规范化为数字、字符串或 false。
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // 命名管道
    return val;
  }

  if (port >= 0) {
    // 端口数字
    return port;
  }

  return false;
}

/**
 * HTTP 服务器“错误”事件的事件侦听器。
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // 使用友好的消息处理特定的侦听错误
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * HTTP 服务器“侦听”事件的事件侦听器。
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
