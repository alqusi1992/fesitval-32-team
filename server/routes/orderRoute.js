import express from 'express';
<<<<<<< HEAD
import { getOrders } from '../controllers/order.js';
import auth from '../middleware/auth.js';

const orderRouter = express.Router();

<<<<<<< HEAD
orderRouter.get('/', getOrders);
=======
import { createOrder } from '../controllers/order.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
>>>>>>> 589c84f1d1f63ea2acc5e4feb5f2a857c4e28ea9
=======
orderRouter.get('/', auth, getOrders);
>>>>>>> d87e7a6eaca7f104772f922618b4b5f0eea88cf9

export default orderRouter;
