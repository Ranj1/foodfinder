export const validateSearch = (req, res, next) => {
  let { name, minPrice, maxPrice } = req.query;

  if (!name) name = "";                // allow all dishes
  if (!minPrice || isNaN(minPrice)) minPrice = 0;        // default min
  if (!maxPrice || isNaN(maxPrice)) maxPrice = 999999;   // default max

  req.query.name = name;
  req.query.minPrice = Number(minPrice);
  req.query.maxPrice = Number(maxPrice);

  next();
};

