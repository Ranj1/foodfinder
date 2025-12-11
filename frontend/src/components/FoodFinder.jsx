import { useState, useEffect } from "react";
import { searchDishes } from "../services/searchService";
import "./FoodFinder.css";

function FoodFinder() {
  const [items, setItems] = useState([]);
  const [dish, setDish] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runSearch = async (searchName, min, max) => {
    setLoading(true);
    try {
      const data = await searchDishes(searchName, min, max);
      setItems(data);
    } catch (err) {
      setError("Something went wrong while fetching results.");
    }
    setLoading(false);
  };

  //  CALL SEARCH API ON FIRST PAGE LOAD
  useEffect(() => {
    runSearch("", 0, 9999); // load all dishes
  }, []);

  const handleSearch = async () => {
    setError("");

    const min = Number(minPrice);
  const max = Number(maxPrice);

  // Check if both fields are filled
  if (minPrice === "" || maxPrice === "") {
    setError("Please enter both minimum and maximum price.");
    return;
  }

  
  if (isNaN(min) || isNaN(max)) {
    setError("Please enter valid numeric values for price.");
    return;
  }


  if (min === 0 && max === 0) {
    setError("Minimum and maximum price cannot both be 0.");
    return;
  }

  if (min > max) {
    setError("Minimum price cannot be greater than maximum price.");
    return;
  }

  if (min > 0 && max === 0) {
    setError("Maximum price must be greater than 0.");
    return;
  }

    runSearch(dish.trim(), minPrice, maxPrice);
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

      <p className="ff-suggestion">
         You can try: Chicken Biryani, Masala Dosa, Paneer Tikka
      </p>

      {error && <p className="ff-error">{error}</p>}
      {loading && <p className="ff-loading">Loading...</p>}

      {/* Empty state */}
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
