/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 14:57:06
 * @LastEditTime: 2021-03-11 09:36:00
 * @LastEditors: Fenghua Zhang
 */
export interface UserInsterface {
    username: string,
    passWord: string,
    id: string
}

export interface LoginResponse {
    id: number,
    password: string,
    token: string,
    username: string
}