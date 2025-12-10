import api from "../config/api";

export const searchDishes = async (dish, minPrice, maxPrice) => {
  const res = await api.get(
    `/search/dishes?name=${dish}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  return res.data.restaurants;
};
