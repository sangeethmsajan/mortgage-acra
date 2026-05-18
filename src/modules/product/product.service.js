const repo = require('./product.repository');

exports.getProducts = async (req, res) => {
  return repo.getProducts(req, res);
};
