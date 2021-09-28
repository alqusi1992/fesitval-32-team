const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(process.env.MONGODB_LINK);
};
module.exports = connectDB;
