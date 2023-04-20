var createError = require("http-errors"); // 创建错误模块
var express = require("express");
var path = require("path"); // 路径模块
var cookieParser = require("cookie-parser"); // 请求体解析插件
var logger = require("morgan"); // 请求体解析插件

// 导入两个路由规则
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// 设置视图引擎
app.set("views", path.join(__dirname, "views")); // ejs 文件都在 views 文件夹里
app.set("view engine", "ejs"); // ejs

app.use(logger("dev")); // 日志
app.use(express.json()); // 来处理post 请求参数的,post的请求参数有两种,一种是表单方式,另外一种弄是json形式的.
app.use(express.urlencoded({ extended: false })); // 表单方式请求体解析
app.use(cookieParser()); // cookie 解析
app.use(express.static(path.join(__dirname, "public"))); // 静态资源目录

app.use("/", indexRouter); // 匹配到 '/'路径 使用 index 路由
app.use("/users", usersRouter); // 匹配到 '/user'路径 使用 user 路由

// 404 错误
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误处理
app.use(function (err, req, res, next) {
  // 设置本地变量，仅在开发过程提供错误
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app; // 导出给 www 文件使用
