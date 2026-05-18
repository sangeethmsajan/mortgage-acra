const service = require('./dashboard.service');

exports.getData = async (req, res) => {
  const data = await service.getData();
  res.json(data);
};
