import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Create a connection pool (recommended for production)
export const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,    // max connections in pool
  queueLimit: 0,          // unlimited queueing
});
