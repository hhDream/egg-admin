/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-10 11:23:32
 * @LastEditTime: 2021-03-31 11:15:35
 * @LastEditors: Fenghua Zhang
 */
/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 13:56:12
 * @LastEditTime: 2021-03-09 17:34:19
 * @LastEditors: Fenghua Zhang
 */
// app/router.ts
import { Application } from "egg";
export default (app: Application) => {
  const { controller, router } = app;
  const jwt = app.middleware.jwt(app.config.jwt);
  router.get("/hero/list", controller.hero.list);
  router.post("/login", controller.user.login);
  router.post("/user/register", controller.user.register);
  router.post("/user/getList", jwt, controller.user.getList);
};
