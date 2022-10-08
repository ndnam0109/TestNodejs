import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config({path: "./.env"});

export const AppDataSource = {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: false,
    entities: [   __dirname + "/entity/*.ts"],
    migrations: [ __dirname + "/migration/*.ts"],
    subscribers: []
}
