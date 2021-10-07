import express from 'express';
import { createPdf, getOrderPdf } from '../controllers/pdf.js';

const createPdfRouter = express.Router();

createPdfRouter.post('/create', createPdf);
createPdfRouter.get('/order-pdf', getOrderPdf);

export default createPdfRouter;
