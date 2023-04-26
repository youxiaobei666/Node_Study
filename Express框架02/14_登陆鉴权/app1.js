const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());

// 定义用于生成 JWT 的密钥
const JWT_SECRET_KEY = "my_secret_key";

// 模拟一个用户数据源
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// 登录接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  

  // 生成 JWT，设置过期时间为 1 小时
  const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
    expiresIn: 3600,
  });

  // 返回 JWT 给客户端
  res.json({ token });
});

// 需要鉴权的接口
app.get("/secure", (req, res) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  // 解析 JWT
  const [prefix, token] = authHeader.split(" ");
  if (prefix !== "Bearer") {
    return res.status(401).json({ message: "Invalid Authorization header" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const user = users.find((u) => u.id === decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 鉴权通过
    res.json({ message: "Success" });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

// 启动服务器
app.listen(3000, () => console.log("Server started on port 3000"));
