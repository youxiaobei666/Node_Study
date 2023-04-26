const express = require("express");

const bodyParser = require("body-parser"); // 解析数据的包

var jwt = require("jsonwebtoken"); // jwt验证

// 定义用于生成 JWT 的密钥
const JWT_SECRET_KEY = "my_secret_key";

// 模拟一个用户数据源
const users = [
  { id: 1, username: "游小北", password: "001223" },
  { id: 2, username: "蔡徐坤", password: "001223" },
];

const app = express();

// 解析 json 格式
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  // 结构出数据字段
  const { username, password } = req.body;

  // 1. 找用户
  const user = users.find((item) => {
    return item.username === username && item.password === password;
  });

  // 1.1. 没找到返回 401
  if (!user) {
    return res.status(401).json({ message: "用户不存在，或者密码错误" });
  }

  // 1.2. 找到 加密 返回 token
  // 1.2.1 加密

  const token = jwt.sign({ userId: users.id }, JWT_SECRET_KEY, {
    expiresIn: 3600,
  });

  // 1.2.2 返回 token

  res.send(token);
});

app.listen(3000, () => {
  console.log("listen in port 3000");
});
