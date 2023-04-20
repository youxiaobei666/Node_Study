/**
 * 查看文件资源信息
 */
const fs = require("fs");

fs.stat("./files/img1.jpg", (err, info) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(info); // 文件信息 dev: 16777234,
    // 判断是否为文件夹
    console.log(info.isFile()); // 是，返回true
    console.log(info.isDirectory()); // 不是，返回false
  }
});
