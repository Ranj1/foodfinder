import { fetchAllMenuItems } from "../services/menuService.js";

export const getAllMenuItems = async (req, res, next) => {
  try {
    const items = await fetchAllMenuItems();
    res.json({ items });
  } catch (err) {
    next(err);
  }
};