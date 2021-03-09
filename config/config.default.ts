/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-09 13:56:12
 * @LastEditTime: 2021-03-09 18:37:36
 * @LastEditors: Fenghua Zhang
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1615269369790_5905';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    config.cors = {
        origin: '*',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

    config.security = {
        domainWhiteList: [
            'localhost:3000',
        ],
        csrf: {
            enable: false,
        },
    };

    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root', // 数据库用户名
        password: '123456',
        database: 'mysql',
        timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
        define: { // model的全局配置
            timestamps: false, // 添加create,update,delete时间戳
            paranoid: true, // 添加软删除
            freezeTableName: true, // 防止修改表名为复数
            underscored: false // 防止驼峰式字段被默认转为下划线
        },
        dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
            dateStrings: true,
            typeCast(field, next) {
                if (field.type === "DATETIME") {
                    return field.string();
                }
                return next();
            }
        }
    }

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig
    };
};
