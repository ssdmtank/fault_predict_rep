/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:55:42
 * @LastEditTime: 2021-03-11 13:49:16
 * @Description:
 */
const { merge } = require("webpack-merge"); // 抽取公共配置
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清理dist
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
