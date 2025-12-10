import express from "express";
import { getAllMenuItems } from "../controllers/menuController.js";

const router = express.Router();

router.get("/items", getAllMenuItems);

export default router;