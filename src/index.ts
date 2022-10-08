import express = require("express");
import "reflect-metadata";
import connectDB from "./connectDB";
// import routes from "./routes";
// import cors from "cors";
require('dotenv').config({path: "./.env"});
import photoController from './modules/photo/controller'
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import docOptions from "./configs/docs";

const app = express();
connectDB()

const specs = swaggerJsdoc(docOptions);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true, customSiteTitle: "Api Document" }),
);

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/photo', photoController.creatPhoto)
    app.listen(4000,() => {
        console.log(` Server is running at http://localhost:${4000}`);
    });
