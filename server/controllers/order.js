import fetch from 'node-fetch';
import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { email, festivalId, tickets } = req.body.order;

  try {
    const order = await Order.create({
      email,
      festivalId,
      tickets,
    });
    const response = await fetch('http://localhost:5000/pdf/create', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ orderId: order.id, email, tickets }),
    });
    if (response) {
      res.status(200).json({ orderId: order.id });
    }
  } catch (error) {
    res.status(500).json({ status: false, msg: error });
  }
};
