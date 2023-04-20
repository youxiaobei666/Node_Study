/**
 * fs.rename 更改文件路径，和文件名，批量重命名
 **/
const fs = require("fs");

// 重命名
fs.rename("./files/03.txt", "./files/一首诗.txt", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("重命名成功");
  }
});

// 移动
fs.rename("./files/一首诗.txt", "./files/files_02/移动了这首诗.txt", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("移动成功");
  }
});

/**
 * 批量重命名
 * 需求：1.你是谁.text -> 1_你是谁.txt
 */

// 读取文件夹内容
const innerFiles = fs.readdirSync("./files_03");
// 输出一个数组
console.log(innerFiles); // [ '1.你是谁.txt', '2.事实上.txt', '3.宿舍.txt' ]
// 分离数字和中文
const newFiles = innerFiles.forEach((item) => {
  const data = item.split("."); // 分割 ：[ '1', '你是谁', 'txt' ]

  let [number, text, ext] = data; // 获取数字和文字
  // 数字小于10，在前面添加 0
  if (number < 10) {
    number = 0 + number;
  }

  // 合并
  const newName = number + "_" + text + "." + ext;

  // 写入
  fs.renameSync(`./files_03/${item}`, newName);
});
