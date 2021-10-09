import Order from '../models/Order.js';

<<<<<<< HEAD
export const getOrders = async (req, res) => {
  const userEmail = req?.userEmail;
  if (!userEmail) {
    return res.status(401).json({ success: false, msg: 'unauthorized' });
=======
export const createOrder = async (req, res) => {
  const { email, festivalId, tickets } = req.body.order;

  try {
    const order = await Order.create({
      email,
      festivalId,
      tickets,
    });
    if (order.id) {
      res.status(200).json({ success: true, order });
    } else {
      res.status(400).json({ success: false, msg: 'Order cannot be created' });
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
>>>>>>> 589c84f1d1f63ea2acc5e4feb5f2a857c4e28ea9
  }
  try {
    const userOrders = await Order.find({ email: userEmail });
    return res.status(200).json({ success: true, result: userOrders });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: 'Something went wrong. Try later' });
  }
};
