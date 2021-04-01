/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-31 11:08:09
 * @LastEditTime: 2021-03-31 11:34:31
 * @LastEditors: Fenghua Zhang
 */

module.exports = (options) => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode: any;
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        console.log("🚀 ~ file: jwt.ts ~ line 17 ~ jwt ~ decode", decode);
        await next();
        console.log(decode);
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: "没有token",
      };
      return;
    }
  };
};
