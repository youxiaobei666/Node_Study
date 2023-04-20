const fs = require("fs"); // 导入 file system 模块

// 异步写入文件
fs.writeFile("./files/01.txt", "被异步写入的内容", (err) => {
  if (err) {
    console.log(err.message); // 输出错误信息
    return;
  } else {
    console.log("成功写入文件./files/01.text");
  }
});

// 同步写入文件
fs.writeFileSync("./files/02.txt", "被同步写入的内容");

// 流式写入 fs.createWriteScream
const ws = fs.createWriteStream("./files/03.txt"); // 创建流式写入实例，传入路径为参数
ws.write("鹅鹅鹅\r\n"); // 写入
ws.write("曲项向天歌\r\n");
ws.write("白毛浮绿水\r\n");
ws.write("红掌拨清波\r\n");

ws.close(); // 关闭流

// 异步追加写入  \r\n 表示换行
fs.appendFile("./files/01.txt", "\r\n这是在01.txt文件内追加的内容", (err) => {
  if (err) {
    console.log("追加失败！");
  } else {
    console.log("追加成功！");
  }
});

// 同步追加
fs.appendFileSync("./files/02.txt", "\r\n这是在02.txt文件内同步追加的内容");

// 使用fs.writeFile 实现异步追加写入
fs.writeFile(
  "./files/01.txt",
  "\r\n被使用fs.writeFile写入的内容",
  { flag: "a" },
  (err) => {
    if (err) {
      console.log(err.message); // 输出错误信息
      return;
    } else {
      console.log("成功写入文件./files/01.text");
    }
  }
);
