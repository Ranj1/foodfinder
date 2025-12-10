import express from "express";
import cors from "cors";
import searchRoutes from "./dishes.js";
import { errorHandler } from "../utils/errorHandler.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/dishes", searchRoutes);


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

export default app;
