// app/model/hero.ts
import { Application } from 'egg';
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: {
            type: STRING,
            allowNull: false
        },
        password: {
            type: STRING,
            allowNull: false
        }
    });

    return User;
};