import stripe from 'stripe';
import Ticket from '../models/Ticket.js';

const paymentHandle = async (req, res) => {
  const payStripe = stripe(process.env.STRIPE_PRIVATE_KEY);
  const ticketsIds = req.body.tickets.map((ticket) => ticket.id);

  // get tickets info from DB
  const ticketsDB = await Ticket.find({ _id: { $in: ticketsIds } });

  // adding quantity to the tickets
  const tickets = ticketsDB.map((ticket, index) => ({
    _id: ticket.id,
    typeName: ticket.typeName,
    price: ticket.price,
    quantity: req.body.tickets[index].quantity,
  }));

  // prepare tickets to be sent to stripe api
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

  // create order to save if payment succeed
  const order = {
    email: req.body.email,
    festivalId: req.body.festivalId,
    tickets,
  };

  try {
    const session = await payStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: purchasedTickets,
      success_url: process.env.STRIPE_SUCCESS_LINK,
      cancel_url: process.env.STRIPE_CANCEL_LINK,
      customer_email: req.body.email,
    });
    return res.json({
      orderInfo: { order, sessionID: session.id },
      url: session.url,
      success: true,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(400).json({
      msg: error.message,
      success: false,
    });
  }
};

export default paymentHandle;
