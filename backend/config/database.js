import { Sequelize } from "sequelize";

const db = new Sequelize('api_catatan', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;