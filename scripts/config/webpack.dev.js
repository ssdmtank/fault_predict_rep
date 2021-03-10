/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:55:42
 * @LastEditTime: 2021-03-10 17:06:22
 * @Description:
 */
const { merge } = require("webpack-merge"); // 抽取公共配置
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
});
