import express from 'express';
import paymentHandle from '../controllers/payment.js';

const paymentRouter = express.Router();

paymentRouter.post('/', paymentHandle);

export default paymentRouter;
