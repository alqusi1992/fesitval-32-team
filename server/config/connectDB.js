import mongoose from 'mongoose';

const connectDB = () => mongoose.connect(process.env.MONGODB_LINK);
export default connectDB;
