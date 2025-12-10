//console.log("searchRoutes loaded");
import express from "express";
import { searchDishes } from "../controllers/dishes.js";
import { validateDishSearchQuery } from "../middleware/validateDishSearchQuery.js";

const router = express.Router();

router.get("/search", validateDishSearchQuery, searchDishes);


export default router;
