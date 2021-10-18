import sgMail from '@sendgrid/mail';

export const verifyEmail = (req, res) => {
  res.send('hello from verify email');
};

export const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'hackyourfutureclass32@gmail.com',
    from: 'malqusi20@gmail.com',
    // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};
