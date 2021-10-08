import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
  const userId = req?.userId;
  if (!userId) {
    return res.status(401).json({ success: false, msg: 'unauthorized' });
  }
};
