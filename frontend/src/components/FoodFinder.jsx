import { useState } from "react";
import { searchDishes } from "../services/searchService";
import "./FoodFinder.css";

function FoodFinder() {
  const [items, setItems] = useState([]);
  const [dish, setDish] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    const queryDish = dish.trim(); // if empty → show all
    const min = minPrice || 0;
    const max = maxPrice || 9999;

    try {
      const data = await searchDishes(queryDish, min, max);
      setItems(data);
    } catch (err) {
      console.log("Search failed", err);
    }

    setLoading(false);
  };

  return (
    <div className="ff-container">
      <h1 className="ff-title">FoodFinder</h1>

      <div className="ff-search-box">
        <input
          type="text"
          placeholder="Search dish..."
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="ff-loading">Loading...</p>}

      {/* Empty page on first load */}
      {!loading && items.length === 0 && (
        <div className="ff-empty-wrapper">
          <div className="ff-empty-card">
            <p>No results found</p>
          </div>
        </div>
      )}

      {/* List */}
      <ul className="ff-list">
        {items.map((i, idx) => (
          <li key={idx} className="ff-list-item">
            {i.orderCount !== undefined && (
              <span className="ff-badge">Top {idx + 1}</span>
            )}

            <h2 className="ff-restaurant-name">{i.restaurantName}</h2>
            <p className="ff-city">{i.city}</p>

            <p className="ff-dish">
              {i.dishName} — <span className="ff-price">₹{i.dishPrice}</span>
            </p>

            {i.orderCount !== undefined && (
              <p className="ff-orders">Orders: {i.orderCount}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodFinder;
