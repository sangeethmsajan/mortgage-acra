let orders = [];
const pool = require('../../../config/db');

exports.createOrder = async (data) => {
  const newOrder = { id: Date.now().toString(), ...data };
  orders.push(newOrder);
  return newOrder;
};

exports.getOrderById = async (id) => {
  return orders.find(o => o.id === id);
};

exports.findByEmail = async (email) => {
   const [rows] = await pool.query(
      'SELECT * FROM user WHERE email = ?',
      [email]
    );
    return rows[0];
}

exports.createUser = async (email, password) => {
 const [result] = await pool.query(
      'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
      [email, email, password]
    );
    return result.insertId;
}
