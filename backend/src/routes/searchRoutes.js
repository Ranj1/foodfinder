//console.log("searchRoutes loaded");
import express from "express";
import { searchDishes } from "../controllers/searchController.js";
import { validateSearch } from "../middleware/validateQuery.js";

const router = express.Router();
//console.log("ranjana");
router.get("/dishes", validateSearch, searchDishes);

// router.get("/dishes", (req, res, next) => {
//      console.log("Search route hit:", req.query);
//      res.send("working");
//      next();
// }, validateSearch, searchDishes);

export default router;
