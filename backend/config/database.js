import { Sequelize } from "sequelize";

const db = new Sequelize('api_catatan', 'root', '',{
    host: '34.28.222.95',
    dialect: 'mysql'
});

export default db;