import mongoose from 'mongoose';

const userSchema = new mongoose.SChema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
});

const User = mongoose.Model('users', userSchema);
export default User;
