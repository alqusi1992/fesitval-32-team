import express from 'express';
import {
  login,
  register,
  deleteAccount,
  updateAccount,
} from '../controllers/user.js';
import auth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.delete('/delete', auth, deleteAccount);
userRouter.patch('/update', auth, updateAccount);

export default userRouter;
