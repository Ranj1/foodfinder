//console.log("controller loaded");
import { getTopRestaurantsWithDish } from "../services/dishes.js";

export const searchDishes = async (req, res, next) => {
  try {
    const { name, minPrice, maxPrice } = req.query;
    const data = await getTopRestaurantsWithDish(name, minPrice, maxPrice);
    res.json({ restaurants: data });
  } catch (err) {
    next(err);
  }
};
