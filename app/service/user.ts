/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 14:51:26
 * @LastEditTime: 2021-03-09 19:31:59
 * @LastEditors: Fenghua Zhang
 */

import { Service } from 'egg';
import { Code } from './../util/util';

export default class User extends Service {
    public async login() {
        const { ctx, app } = this;
        const { username, password } = ctx.request.body;
        let data = {};
        const user = await ctx.model.User.findOne({
            where: {
                username: username
            }
        });
        if (!user) {
            Code.ERROR.message = '用户不存在'
            data = Code.ERROR
        } else if (user.password != password) {
            Code.ERROR.message = '密码错误'
            data = Code.ERROR
        } else {
            const token = app.jwt.sign({
                username: username
            }, app.config.jwt.secret)
            Code.SUCCESS.message = '登录成功';
            let userInfo = user.get('', { plain: true });
            let d = Object.assign(userInfo, { token: token })
            data = Object.assign(Code.SUCCESS, { data: d })
        }
        return data
    }
}