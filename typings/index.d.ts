/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 13:56:12
 * @LastEditTime: 2021-03-09 19:32:38
 * @LastEditors: Fenghua Zhang
 */
import 'egg';
import 'sequelize'

declare module 'egg' {
    
}
declare module 'sequelize' {
    interface Model {
        password: string;
        token: string;
    }
}