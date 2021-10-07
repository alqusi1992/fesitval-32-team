import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { email, festivalId, tickets } = req.body;
  try {
    const order = await Order.create({
      email,
      festivalId,
      tickets,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ status: false, msg: error });
  }
};
