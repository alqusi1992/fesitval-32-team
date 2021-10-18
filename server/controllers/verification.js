import sgMail from '@sendgrid/mail';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyEmail = (req, res) => {
  const { token } = req.query;
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  res.send(decodedData.email);
};

export const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email, _id } = req.body;
  const token = jwt.sign({ email, id: _id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  const msg = {
    to: `${email}`,
    from: 'malqusi20@gmail.com',
    // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>and easy to do anywhere, even with Node.js</strong>
    <h1><a href='http://localhost:5000/verification/verify-email?token=${token}'>http://localhost:5000/verification/verify-email?token=${token}</a></h1>
    `,
  };

  try {
    await sgMail.send(msg);
    res.send('email has been sent');
  } catch (error) {
    console.log(error);
  }
};
