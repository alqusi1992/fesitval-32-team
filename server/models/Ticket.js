import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  typeName: { type: String, required: true },
  availableQty: { type: Number, required: true },
  price: { type: Number, required: true },
  festivalId: { type: String },
});

const Ticket = mongoose.model('tickets', TicketSchema);

export default Ticket;
