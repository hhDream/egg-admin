/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 13:56:12
 * @LastEditTime: 2021-03-09 17:34:19
 * @LastEditors: Fenghua Zhang
 */
// app/router.ts
import { Application } from 'egg';
export default (app: Application) => {
    const { controller, router } = app;
    router.get('/hero/list', controller.hero.list);
    router.post('/login', controller.user.login)
}