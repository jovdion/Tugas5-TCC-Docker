import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA', 'root', '',{
    host: '34.28.222.95',
    dialect: 'mysql'
});

export default db;
