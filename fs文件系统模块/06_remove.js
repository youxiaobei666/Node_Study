/**
 * 删除文件
 */
const fs = require("fs");

// 方法一
fs.rm("./files/files_02/垃圾文件1", (err) => {
  if (err) {  
    console.log(err.message);
  } else {
    console.log("删除成功");
  }
}); // fs.rm 在 node 14.4 版本以上支持

// 方法二
fs.unlink("./files/files_02/垃圾文件2", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("删除成功");
  }
});
