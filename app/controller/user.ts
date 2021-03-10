
import { Controller } from 'egg';
export default class User extends Controller {
    public async login() {
        const { ctx } = this;
        ctx.body = await ctx.service.user.login();
    }
}