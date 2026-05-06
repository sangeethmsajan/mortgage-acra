// const repo = require('./order.repository');
const bcrypt = require('bcrypt');
const authRepo = require('./auth.repository');

exports.create = async (payload) => {
  return repo.createOrder(payload);
};

exports.getById = async (id) => {
  return repo.getOrderById(id);
};

exports.register = async (email, password) => {
  const existingUser = await authRepo.findByEmail(email);
  if (existingUser) {
    throw new Error('Email already exists');
  }
  console.log(password);

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const userId = await authRepo.createUser(email, hashedPassword);

  return {
    id: userId,
    email
  };
}
