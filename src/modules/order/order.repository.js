let orders = [];

exports.createOrder = async (data) => {
  const newOrder = { id: Date.now().toString(), ...data };
  orders.push(newOrder);
  return newOrder;
};

exports.getOrderById = async (id) => {
  return orders.find(o => o.id === id);
};
