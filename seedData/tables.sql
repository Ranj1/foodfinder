CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    city VARCHAR(200) NOT NULL
);

CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    price FLOAT NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

CREATE INDEX idx_menu_price ON menu_items(price);
CREATE INDEX idx_orders_menu_item ON orders(menu_item_id);

-- Index Notes:
-- 1. Added index on price because the query filters using price BETWEEN, 
--    so MySQL can efficiently use this index.
-- 2. Not adding an index on name because LIKE '%text%' prevents MySQL 
--    from using a normal B-Tree index due to the leading wildcard.
-- 3. Not using a composite (price, name) index because the name part 
--    is still unusable with '%text%' and offers no benefit over indexing price alone.
-- 4. Added index on orders.menu_item_id to speed up the JOIN and order counting.

