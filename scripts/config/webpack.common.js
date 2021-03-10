/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:42:24
 * @LastEditTime: 2021-03-10 17:06:06
 * @Description:
 */
const path = require("path");
const { isDev, PROJECT_PATH } = require("../constant");

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, "./src/app.js"),
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
    path: path.resolve(PROJECT_PATH, "./dist"),
  },
};
