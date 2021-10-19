import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import sendEmailSandGrid from '../utils/sendEmailSandGrid.js';

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

export const sendEmailVerification = async (req, res) => {
  const { email, _id } = req.body;
  const token = jwt.sign({ email, id: _id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  const subject = 'Festival32 email Verification';
  const toEmail = email;
  const url = `${process.env.SERVER_URL}/verification/verify-email?token=${token}`;
  const html = `<p>Please verify your email by clicking this link below: </p>
<a href='${url}'>${url}</a>`;

  try {
    await sendEmailSandGrid(toEmail, subject, html);
    res.status(200).json({ success: true, msg: 'email has been sent' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: 'Something went wrong' });
  }
};
