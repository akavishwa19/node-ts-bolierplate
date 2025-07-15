//resolve dotenv
import "dotenv/config";

//import all models to sync the db
import User from "../Models/user.model.js";

// import pg from "pg";
// const { Pool } = pg;

import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  logging: console.log, // Set to false in production to disable logs
});

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: Number(process.env.DB_PORT),
// });

// async function connectToDb() {
//   try {
//     const client = await pool.connect();
//     console.log('connected to DB server succesfully');
//     client.release();
//   } catch (error) {
//     console.log(error);
//   }
// }

async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("connected to DB server succesfully");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
}

export { connectToDb, sequelize };
