/**
 * 文件夹操作：创建、重命名、读取
 */
const fs = require("fs");

// 创建
fs.mkdir("./files_03", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("创建成功");
  }
});

// 递归创建 配置{ recursive: true }实现递归
fs.mkdir("./files_04/子文件夹1/子文件夹二", { recursive: true }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("递归创建成功");
  }
});

// 读取文件夹,读取的数据在第二个型参
fs.readdir("./files", (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(files); // 读取结果
  }
});

// 删除
fs.rmdir("./files/要被删除的", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("删除成功");
  }
});

// 递归删除
fs.rmdir("./files/files_05", (err) => {
  if (err) {
    console.log(err.message); // 报错：directory not empty, rmdir './files/files_05'
  } else {
    console.log("删除成功");
  }
});

// 一般不让删除有子文件夹的文件夹
// 添加递归强制删除：fs.rmdir(path, { recursive: true, force: true })
fs.rmdir("./files/files_05", { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err.message); // 报错：directory not empty, rmdir './files/files_05'
  } else {
    console.log("删除成功");
  }
});
