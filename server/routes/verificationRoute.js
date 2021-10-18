import express from 'express';
import { verifyEmail, sendEmail } from '../controllers/verification.js';

const verificationRouter = express.Router();

verificationRouter.post('/send-email', sendEmail);
verificationRouter.post('/verify-email', verifyEmail);

export default verificationRouter;
