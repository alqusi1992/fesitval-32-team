import express from 'express';
import { getOrders, createOrder } from '../controllers/order.js';
import auth from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.get('/', auth, getOrders);

orderRouter.post('/', createOrder);

export default orderRouter;
