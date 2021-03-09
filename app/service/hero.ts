// app/service/hero.ts
import { Service } from 'egg';
// import { HeroInterface } from '../interface/hero.interface';
import { Code } from '../util/util';
export default class Hero extends Service {
    public async list() {
        const { ctx } = this;
        const result: any = await ctx.model.Hero.findAll({});
        return Object.assign({}, Code.SUCCESS, {
            data: result,
        });
    }
}