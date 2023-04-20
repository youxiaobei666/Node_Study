// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// shortid
const shortid = require("shortid");

var express = require("express");
var router = express.Router();

// home
router.get("/", function (req, res, next) {
  res.render("index", { title: "记事本案例" });
});

// submit
router.post("/submit", function (req, res, next) {
  console.log(req.body);
  db.defaults({ list: [] }).write(); // 初始化数据
  db.get("list").unshift({ id: shortid.generate(), data: req.body }).write().id; // 写入数据, 随机id
  res.render("submit", { message: "成功" });
});

// 列表
router.get("/list", function (req, res, next) {
  // 获取列表
  const data = db.getState();
  res.render("list", data);
});

// 删除
router.get("/delete:id", function (req, res, next) {
  // 获取参数
  const id = req.params.id.slice(1);
  console.log(id);
  // 删除对应数据
  db.get("list").remove({ id: id }).write();
  res.send("删除成功");
});

module.exports = router;
