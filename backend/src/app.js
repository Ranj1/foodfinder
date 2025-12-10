console.log("app.js loaded");
import express from "express";
import cors from "cors";
import searchRoutes from "./routes/searchRoutes.js";
import { errorHandler } from "./utils/errorHandler.js";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Incoming:", req.method, req.url);
//   next();
// });
app.use("/search", searchRoutes);
app.use("/menu", menuRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

export default app;
