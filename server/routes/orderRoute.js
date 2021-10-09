import express from 'express';
import { getOrders, createOrder } from '../controllers/order.js';
import auth from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', auth, getOrders);

export default orderRouter;
