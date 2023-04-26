const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 模拟一个用户数据源
const users = [];

// 注册接口
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // 校验用户名和密码不能为空
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  // 校验用户名不能重复
  if (users.some((u) => u.username === username)) {
    return res.status(409).json({ message: "Username already exists" });
  }
  // 创建新用户并添加到用户数据源中
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.json(newUser);
});

// 获取用户列表接口 (需要管理员权限)
app.get("/users", (req, res) => {
  // 管理员鉴权 (假设用有一个 isAdmin 字段表示用户是否是管理员)
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Forbidden" });
  }
  res.json(users);
});

// 启动服务器
app.listen(3001, () => console.log("Server started on port 3000"));
