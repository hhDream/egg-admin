/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-10 11:23:32
 * @LastEditTime: 2021-03-22 13:37:55
 * @LastEditors: Fenghua Zhang
 */
// app/model/hero.ts
import { Application } from "egg";
export default (app: Application) => {
  const { STRING, INTEGER, DATE, NUMBER } = app.Sequelize;
  const User = app.model.define("users", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    age: {
      type: NUMBER,
      allowNull: false,
    },
    created_at: {
      type: DATE,
      allowNull: false,
      comment: "created time",
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      comment: "updated time",
    },
  });

  return User;
};
