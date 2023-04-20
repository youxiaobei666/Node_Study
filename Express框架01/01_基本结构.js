const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log("服务开启在 8080 端口");
});
