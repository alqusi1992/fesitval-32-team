import express from 'express';
import { login, register, deleteAccount, updateAccount } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.delete('/delete/:id', deleteAccount);
userRouter.patch('/update/:id', updateAccount);

export default userRouter;
