const service = require('./product.service');


exports.getProducts = async (req, res) => {
  const data = await service.getProducts(req, res);
  res.json(data);
};
