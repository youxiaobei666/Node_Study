/**
 * 案例:
 *      复制文件,
 *      第一种方式：流式复制，边读取边复制效率更高
 *      第二种方式：先读取，再复制，效率低
 * ps:  process.memoryUsage() 查看内存使用
 */
const fs = require("fs");

/**
 * 方法一
 */
// 1.读取流
const rs = fs.createReadStream("./files/img1.jpg");
// 2.写入流
const ws = fs.createWriteStream("./files/img2.jpg");
// 3.读取
rs.on("data", (chunk) => {
  // 4.把读取到的内容，同时写入
  ws.write(chunk, (err) => {
    if (err) {
      console.log("写入错误" + err.message);
    }
  });
});
// 5.结束
rs.on("end", () => {
  console.log("读取结束\r\n方法一使用内存如下");
  console.log(process.memoryUsage());
});

/**
 * 方法二
 */

const data2 = fs.readFileSync("./files/img1.jpg"); // 得到读取的数据
// 把读取的数据写入
fs.writeFile("./files/img3.jpg", data2, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("方法二内存使用:\r\n");
    console.log(process.memoryUsage());
  }
});
