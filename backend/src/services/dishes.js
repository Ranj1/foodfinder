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
    COALESCE(o.orderCount, 0) AS orderCount
FROM menu_items mi
INNER JOIN restaurants r 
    ON r.id = mi.restaurant_id
LEFT JOIN (
    SELECT menu_item_id, COUNT(*) AS orderCount
    FROM orders
    GROUP BY menu_item_id
) o 
    ON o.menu_item_id = mi.id
WHERE mi.price BETWEEN ? AND ?
  AND mi.name LIKE CONCAT('%', ?, '%')
ORDER BY orderCount DESC
LIMIT 10
`;

  const [rows] = await pool.execute(sql, [minPrice, maxPrice,name]);
  return rows;
};
