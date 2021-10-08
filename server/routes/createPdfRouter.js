import express from 'express';
import { createPdf } from '../controllers/pdf.js';

const createPdfRouter = express.Router();

createPdfRouter.post('/create', createPdf);

export default createPdfRouter;
