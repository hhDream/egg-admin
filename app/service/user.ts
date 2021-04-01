/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-10 11:23:32
 * @LastEditTime: 2021-03-31 16:21:31
 * @LastEditors: Fenghua Zhang
 */

import { Service } from "egg";
import { Code } from "./../util/util";
export default class User extends Service {
  public async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    let data = {};
    const user = await ctx.model.User.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      Code.ERROR.message = "用户不存在";
      data = Code.ERROR;
    } else if (user.password != password) {
      Code.ERROR.message = "密码错误";
      data = Code.ERROR;
    } else {
      const token = app.jwt.sign(
        {
          username: username,
        },
        app.config.jwt.secret,
        {
          expiresIn: "60m", // 过期时间
        }
      );
      Code.SUCCESS.message = "登录成功";
      let userInfo = user.get("", { plain: true });
      let d = Object.assign(userInfo, { token: token });
      data = Object.assign(Code.SUCCESS, { data: d });
    }
    return data;
  }
  public async register() {
    const { ctx } = this;
    const { username, password, name, age } = ctx.request.body;
    const sd = require("silly-datetime");
    const created_at = sd.format(new Date(), "YYYY-MM-DD HH:mm:ss");
    let data = {};
    const user = await ctx.model.User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      ctx.model.User.create({
        username,
        password,
        name,
        age,
        created_at,
        updated_at: created_at,
      });
      console.log({
        username,
        password,
        name,
        age,
        created_at,
        updated_at: created_at,
      });
      Code.SUCCESS.message = "创建成功";
      data = Object.assign(Code.SUCCESS, { username });
    } else {
      Code.ERROR.message = "该用户已经存在";
      data = Code.ERROR;
    }
    return data;
  }
  public async getList() {
    const { ctx } = this;
    const { currentPage = 1, count = 10 } = ctx.request.body;
    const userList = await ctx.model.User.findAndCountAll({
      limit: parseInt(count),
      offset: (currentPage - 1) * count,
      distinct: true,
    });
    Code.SUCCESS.message = "";
    return Object.assign({}, Code.SUCCESS, {
      data: userList,
    });
  }
}
