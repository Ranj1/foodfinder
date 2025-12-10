export const validateDishSearchQuery = (req, res, next) => {
  let { name, minPrice, maxPrice } = req.query;

  if (!name) name = "";

  if (!minPrice || isNaN(minPrice)) return res.status(400).json({ error: "minPrice is required" });
  if (!maxPrice || isNaN(maxPrice)) return res.status(400).json({ error: "maxPrice is required" });

  req.query.name = name;
  req.query.minPrice = Number(minPrice);
  req.query.maxPrice = Number(maxPrice);

  next();
};


