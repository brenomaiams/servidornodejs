import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mysql",
    database: "provateste",
    username: "root",
    password: "supre123",
    host: "localhost",
    port: 3306,
});

export default sequelize;