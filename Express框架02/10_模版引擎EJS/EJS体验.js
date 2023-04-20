/**
 * 模版引擎是分离 用户界面（HTML） 和 业务数据(JS) 的一种技术
 * 他是一个高效的 javascript 模版引擎，https://ejs.bootcss.com/
 * 下载：npm i ejs --save
 *      类似之前我们使用的 ${} 模版字符串加强版
 */

// 1. 导入
const ejs = require("ejs");

// 2. 定义一个变量，后面使用
const str = "这是一个变量哦";

// 3. 使用 EJS 的渲染,介绍：
// <%= 某一个变量,需要在render 加入第二个对象参数 %>
let result = ejs.render("介绍：<%= str %>", { str: str });

console.log(result);
