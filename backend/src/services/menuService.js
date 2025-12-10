import { pool } from "../config/db.js";

export const fetchAllMenuItems = async () => {
  const sql = `
    SELECT
      mi.id AS menuItemId,
      mi.name AS dishName,
      mi.price AS dishPrice,
      r.id AS restaurantId,
      r.name AS restaurantName,
      r.city
    FROM menu_items mi
    INNER JOIN restaurants r ON r.id = mi.restaurant_id
    ORDER BY mi.name ASC;
  `;
  
  const [rows] = await pool.execute(sql);
  return rows;
};
