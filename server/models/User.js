import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  password: { type: String, required: true },
  phone: String,
});

const User = mongoose.model('users', userSchema);

export default User;
