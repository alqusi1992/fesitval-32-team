// const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const paymentHandle = async (req, res) => {
  res.send('payment');
};

export default paymentHandle;
