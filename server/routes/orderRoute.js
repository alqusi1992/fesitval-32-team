import express from 'express';
import { getOrders } from '../controllers/order.js';
import auth from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.get('/', auth, getOrders);

export default orderRouter;
