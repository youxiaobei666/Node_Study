const express = require("express");
const app = express();
/**
 * 为了防止别的服务器盗用自己服务器的资源
 * 检测 请求头中的 hostname 是否为我们的服务器地址ip
 * 这其实是一个全局中间件
 */

const TextMV = (req, res, next) => {
  // 获取 hostname
  const hostname = req.hostname;
  // 判断是否为自己的主机地址
  if (hostname !== "127.0.0.1") {
    res.status(404);
    res.send("404 NOT FOUND");
    return;
  }
  next();
};

app.get("*", TextMV, (req, res) => {
  res.send("获取了资源哦");
});

app.listen(8080, () => {
  console.log("服务开启在 8080 端口");
});
