const service = require('./order.service');

exports.createOrder = async (req, res) => {
  const data = await service.create(req.body);
  res.json(data);
};

exports.getOrder = async (req, res) => {
  const data = await service.getById(req.params.id);
  res.json(data);
};
