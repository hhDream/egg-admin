// app/model/hero.ts
import { Application } from 'egg';
export default (app: Application) => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const model = app.model.define('heros', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(40),
        created_at: DATE,
        updated_at: DATE,
    });
    return model;
};