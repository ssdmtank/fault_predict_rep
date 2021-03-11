/*
 * @Author: KingWin
 * @Date: 2021-03-10 16:49:54
 * @LastEditTime: 2021-03-11 13:44:09
 * @Description:
 */
const path = require("path");

const PROJECT_PATH = path.resolve(__dirname, "../"); // 项目根目录
const PROJECT_NAME = path.parse(PROJECT_PATH).name; // 项目名

const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = 9000;

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  isDev,
};
