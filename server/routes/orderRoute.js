import express from 'express';
<<<<<<< HEAD
import { getOrders } from '../controllers/order.js';

const orderRouter = express.Router();

orderRouter.get('/', getOrders);
=======
import { createOrder } from '../controllers/order.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
>>>>>>> 589c84f1d1f63ea2acc5e4feb5f2a857c4e28ea9

export default orderRouter;
