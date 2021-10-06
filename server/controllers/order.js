import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { userId, festivalId, tickets } = req.body;
  try {
    const order = await Order.create({
      userId,
      festivalId,
      tickets,
    });
    res.json(order);
  } catch (error) {
    console.log(error);
  }
};
