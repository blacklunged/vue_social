import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_HOST, DB_PORT } from "./utils/config.js";

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    '',
    {
        dialect:'mysql',
        host:DB_HOST,
    }
)
