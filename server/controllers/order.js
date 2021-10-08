import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
  const userEmail = req?.userEmail;
  if (!userEmail) {
    return res.status(401).json({ success: false, msg: 'unauthorized' });
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
