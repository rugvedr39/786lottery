// code by = My Online Hub
// const mysql = require("mysql2/promise");
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
    host: "database-1.cdqemqu0murh.ap-south-1.rds.amazonaws.com",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default connection;