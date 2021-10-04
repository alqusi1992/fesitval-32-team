import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  price: { type: String, required: true },
  type_name: { type: String, required: true },
  available_qty: { type: String, required: true },
  festival_id: { type: String, required: true },
});

const Ticket = mongoose.model("ticket", ticketSchema);

export default Ticket;
