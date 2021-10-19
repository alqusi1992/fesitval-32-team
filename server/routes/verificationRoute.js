import express from 'express';
import {
  verifyEmail,
  sendEmailVerification,
} from '../controllers/verification.js';

const verificationRouter = express.Router();

verificationRouter.post('/send-email', sendEmailVerification);
verificationRouter.get('/verify-email', verifyEmail);

export default verificationRouter;
