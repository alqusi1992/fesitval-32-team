import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  email: { type: String, required: true },
  festivalId: { type: String, required: true },
  tickets: [
    {
      _id: { type: String, required: true },
      typeName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model('orders', orderSchema);

export default Order;
