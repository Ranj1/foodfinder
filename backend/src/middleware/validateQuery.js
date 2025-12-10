export const validateSearch = (req, res, next) => {
  const { name, minPrice, maxPrice } = req.query;

  if (!name) return res.status(400).json({ error: "name is required" });
  if (!minPrice || isNaN(minPrice)) return res.status(400).json({ error: "minPrice must be a number" });
  if (!maxPrice || isNaN(maxPrice)) return res.status(400).json({ error: "maxPrice must be a number" });

  next();
};
