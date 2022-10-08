import { createConnection } from "typeorm";
import {AppDataSource} from "./data-source";
require('dotenv').config({ path: "./.env" });
const connectDB = function (callback?: (...args: any[]) => void) {
    createConnection(AppDataSource as any)
        .then(() => {
            console.log("Connected to the database!");
            callback && callback();
        })
        .catch((e) => {
            console.log("Can not connect to the db: ", e);
        });
};

export default connectDB;
