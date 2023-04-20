const fs = require("fs");

// 异步读取
fs.readFile("./files/03.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data.toString()); // buffer.toString 转为utf-8 字符
  }
});

// 同步读取 readFileSync
const date2 = fs.readFileSync("./files/03.txt");
console.log(date2.toString());

/**
 * 流式读取
 */
const rs = fs.createReadStream("./files/img1.jpg");

// 读取
rs.on("data", (chunk) => {
  console.log(chunk.length);
});

// 结束
rs.close(() => {
  console.log("读取结束");
});
