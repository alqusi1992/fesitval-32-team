import mongoose from 'mongoose';

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_LINK);
};
export default connectDB;
