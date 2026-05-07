// const repo = require('./order.repository');
const bcrypt = require('bcrypt');
const authRepo = require('./auth.repository');
const { response } = require('express');
const { json } = require('zod');
const jwt = require('jsonwebtoken');

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

exports.login = async ({ email, password }) => {
  const user = await authRepo.findByEmail(email);
  // console.log(user);
  // return user.password;
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email
    }
  };
};
