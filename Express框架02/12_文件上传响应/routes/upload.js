var express = require("express");
var router = express.Router();
// 导入依赖
const formidable = require("formidable");

// 虽然 写的是 根路径，但实际访问的是 /upload 路径，如果 写了 /api ,那就是 /upload/api
router.post("/", function (req, res, next) {
  // 创建 form 对象
  const form = formidable({
    multiples: true,
    // 保存上传的文件的路径
    uploadDir: __dirname + "/../public/images",
    // 保留后缀
    keepExtensions: true,
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(files); // 包含需要的 newFilename 新文件名
    // 保存资源路径,前面省略的路径是 /public,这是资源路径，不用写
    const url = "/images/" + files.upload.newFilename;
    res.send("资源路径为" + url);
  });
});

module.exports = router;
