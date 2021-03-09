/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 14:51:26
 * @LastEditTime: 2021-03-09 19:31:59
 * @LastEditors: Fenghua Zhang
 */

import { Service } from 'egg';

export default class User extends Service {
    public async login() {
        const { ctx } = this;
        const { userName, passWord } = ctx.request.body;
        let data = { message: '', code: 0, data: {} };
        const user = await ctx.model.User.findOne({
            where: {
                userName: userName
            }
        });
        if (!user) {
            data.message = '用户不存在';
            data.code = 300
        } else if (user.passWord != passWord) {
            data.message = '密码错误';
            data.code = 300
        } else {
            data.message = '登录成功';
            data.data = user;
            data.code = 0
        }
        // const result: any = await ctx.model.User.findAll({ where: { userName: userName, passWord: passWord } });
        return data
    }
}