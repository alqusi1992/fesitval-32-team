const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_LINK);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = connectDB;
