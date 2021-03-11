/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:55:42
 * @LastEditTime: 2021-03-11 13:37:35
 * @Description:
 */
const { merge } = require("webpack-merge"); // 抽取公共配置
const { SERVER_HOST, SERVER_PORT } = require("../constant.js");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: 'eval-source-map', 
  devServer: {
    host: SERVER_HOST, // 默認localhost
    port: SERVER_PORT, // 默认8080
    stats: "errors-only", // 终端只打印错误日志
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用gzip压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
});
