/**
 * 路由模块化，把路由规则放在独立的文件中，然后 require 导入使用
 */

const express = require("express"); // 导入express

// 创建路由对象，使用 express.Router() 方法
const router = express.Router();

// 创建路由规则
router.get("/router", (req, res) => {
  res.send("你访问了分离路由模块");
});

// module.exports 暴露出路由对象router
module.exports = router;
