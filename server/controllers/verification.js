import sgMail from '@sendgrid/mail';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decodedData;
    const existedUser = await User.findById(id);

    if (!existedUser) {
      return res.redirect(process.env.CLIENT_URL);
    }

    const userVerified = await User.findByIdAndUpdate(id, {
      $set: { isVerified: true },
    });

    if (!userVerified) {
      return res.redirect(`${process.env.CLIENT_URL}?isVerified=false`);
    }

    return res.redirect(`${process.env.CLIENT_URL}?isVerified=true`);
  } catch (error) {
    console.log(error.message);

    if (error.message === 'jwt expired') {
      return res.redirect(
        `${process.env.CLIENT_URL}?isVerified=false&tokenExpired=true`,
      );
    }

    return res.redirect(`${process.env.CLIENT_URL}?isVerified=false`);
  }
};

export const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, _id } = req.body;
  const token = jwt.sign({ email, id: _id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  const url = `${process.env.SERVER_URL}/verification/verify-email?token=${token}`;

  const msg = {
    to: `${email}`,
    from: `${process.env.SENDGRID_EMAIL}`,
    subject: 'Festival32 email Verification',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<p>Please verify your email by clicking this link below: </p>
   <a href='${url}'>${url}</a>
    `,
  };

  try {
    await sgMail.send(msg);
    res.send('email has been sent');
  } catch (error) {
    console.log(error);
  }
};
