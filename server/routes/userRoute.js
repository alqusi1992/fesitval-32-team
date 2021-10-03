import express from 'express';
import { login } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/login', login);
export default userRouter;
