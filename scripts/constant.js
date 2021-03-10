/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:49:54
 * @LastEditTime: 2021-03-10 17:01:12
 * @Description:
 */
const path = require("path");

const PROJECT_PATH = path.resolve(__dirname, "../"); // 项目根目录
const PROJECT_NAME = path.parse(PROJECT_PATH).name; // 项目名

const isDev = process.env.NODE_ENV !== "prouction";

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
};
