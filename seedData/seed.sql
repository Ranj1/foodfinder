INSERT INTO restaurants (name, city) VALUES
('Biryani House', 'Hyderabad'),
('Hyderabadi Spice Kitchen', 'Hyderabad'),
('Royal Delhi Darbar', 'Delhi'),
('Mumbai Tawa & Grill', 'Mumbai'),
('South Masala Cafe', 'Bangalore');

INSERT INTO menu_items (restaurant_id, name, price) VALUES
(1, 'Chicken Biryani', 220),
(1, 'Veg Biryani', 160),
(1, 'Paneer Butter Masala', 180),

(2, 'Chicken Biryani', 250),
(2, 'Mutton Biryani', 320),
(2, 'Veg Biryani', 180),

(3, 'Chicken Biryani', 200),
(3, 'Butter Chicken', 260),
(3, 'Dal Tadka', 150),

(4, 'Chicken Biryani', 240),
(4, 'Egg Biryani', 190),
(4, 'Paneer Tikka', 210),

(5, 'Chicken Biryani', 210),
(5, 'Veg Biryani', 170),
(5, 'Masala Dosa', 110);

INSERT INTO orders (restaurant_id, menu_item_id) VALUES
(1, 1), (1, 1), (1, 1), (1, 1),
(1, 2), (1, 2),
(1, 3),

(2, 4), (2, 4), (2, 4), (2, 4), (2, 4),
(2, 5), (2, 5), (2, 5),
(2, 6), (2, 6),

(3, 7), (3, 7), (3, 7),
(3, 8), (3, 8),
(3, 9),

(4,10), (4,10), (4,10),
(4,11), (4,11),
(4,12), (4,12), (4,12),

(5,13), (5,13),
(5,14),
(5,15), (5,15), (5,15);
