import stripe from 'stripe';
import Ticket from '../models/Ticket.js';

const paymentHandle = async (req, res) => {
  const payStripe = stripe(process.env.STRIPE_PRIVATE_KEY);
  const ticketsIds = req.body.map((ticket) => ticket.id);
  const ticketsDB = await Ticket.find({ _id: { $in: ticketsIds } });
  const tickets = ticketsDB.map((ticket, index) => ({
    // adding quantity to the tickets
    typeName: ticket.typeName,
    price: ticket.price,
    quantity: req.body[index].quantity,
  }));
  const purchasedTickets = tickets.map((ticket) => ({
    price_data: {
      currency: 'EUR',
      product_data: {
        name: ticket.typeName,
      },
      unit_amount: ticket.price * 100,
    },
    quantity: ticket.quantity,
  }));
  try {
    const session = await payStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: purchasedTickets,
      success_url: process.env.STRIPE_SUCCESS_LINK,
      cancel_url: process.env.STRIPE_CANCEL_LINK,
    });
    return res.json({ url: session.url, success: true });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      msg: error.message,
      success: false,
    });
  }
};

export default paymentHandle;
