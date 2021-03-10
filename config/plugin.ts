import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
};

export default plugin;
