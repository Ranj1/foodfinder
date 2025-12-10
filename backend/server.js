import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { pool } from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL database connected");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
console.log("App object:", typeof app);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

startServer();
