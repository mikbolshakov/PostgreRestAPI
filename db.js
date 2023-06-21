import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  host: "localhost",
  port: 5432,
  database: "example_db",
});

export default pool;
