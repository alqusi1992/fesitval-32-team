import express from 'express';
import { getOrders } from '../controllers/order.js';

const orderRouter = express.Router();

orderRouter.get('/', getOrders);

export default orderRouter;
