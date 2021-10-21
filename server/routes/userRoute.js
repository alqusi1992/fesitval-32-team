import express from 'express';
import {
  login,
  register,
  deleteAccount,
  updateAccount,
  forgotPassword,
  testEmail,
  resetPassword,
} from '../controllers/user.js';
import auth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.delete('/delete', auth, deleteAccount);
userRouter.patch('/update', auth, updateAccount);
userRouter.post('/forgot-password', forgotPassword);
userRouter.put('/reset-password', resetPassword);
userRouter.get('/testEmail', testEmail);

export default userRouter;
