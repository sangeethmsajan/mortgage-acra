// const repo = require('./order.repository');

exports.create = async (payload) => {
  return repo.createOrder(payload);
};

exports.getById = async (id) => {
  return repo.getOrderById(id);
};
