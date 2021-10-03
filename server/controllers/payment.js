import stripe from 'stripe';
const payStripe = stripe(process.env.STRIPE_PRIVATE_KEY);

const paymentHandle = async (req, res) => {
  const tickets = req.body;

  const purchasedTickets = tickets.map((ticket) => {
    return {
      price_data: {
        currency: 'EUR',
        product_data: {
          name: ticket.typeName,
        },
        unit_amount: ticket.price * 100,
      },
      quantity: ticket.quantity,
    };
  });
  try {
    const session = await payStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: purchasedTickets,
      success_url: `http://localhost:3001`,
      cancel_url: `http://localhost:3001`,
    });
    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: {
        msg: 'payment failed',
        success: false,
      },
    });
  }
};

export default paymentHandle;
