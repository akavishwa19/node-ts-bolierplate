//resolve dotenv
import "dotenv/config";

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

async function connectToDb() {
  try {
    const client = await pool.connect();
    console.log('connected to DB server succesfully');
    client.release();
  } catch (error) {
    console.log(error);
  }
}

export default connectToDb;
