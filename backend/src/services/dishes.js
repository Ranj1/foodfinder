//console.log("service loaded");
import { pool } from "../config/db.js";

export const getTopRestaurantsWithDish = async (name, minPrice, maxPrice) => {
  const sql = `
    SELECT
      r.id AS restaurantId,
      r.name AS restaurantName,
      r.city,
      mi.name AS dishName,
      mi.price AS dishPrice,
      COUNT(o.id) AS orderCount
    FROM menu_items mi
    INNER JOIN restaurants r ON r.id = mi.restaurant_id
    LEFT JOIN orders o ON o.menu_item_id = mi.id
    WHERE mi.name LIKE CONCAT('%', ?, '%')
      AND mi.price BETWEEN ? AND ?
    GROUP BY r.id, mi.id
    ORDER BY orderCount DESC
    LIMIT 10;
  `;

  const [rows] = await pool.execute(sql, [name, minPrice, maxPrice]);
  return rows;
};
