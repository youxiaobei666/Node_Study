/**
 * 绝对路径和相对路径的问题
 */
const fs = require("fs");

// 相对路径
fs.writeFileSync("./index.html", "index"); // 在当前文件同级目录下新建文件
/**
 * 如果把node执行的终端目录修改至上级目录，就会出现错误
 * Error: Cannot find module '/Users/jiangchuanyou/Desktop/node/path.js'
 */

// 建议使用绝对路径 __dirname
console.log(__dirname); // Users/jiangchuanyou/Desktop/node/fs

// 使用绝对路径拼接相对的路径
fs.writeFileSync(__dirname + "/index.html", "拼接路径"); // 无需加符号：.

// 建议使用 path 模块
const path = require("path");
fs.writeFileSync(path.join(__dirname, "/index.html"), "path模块");
