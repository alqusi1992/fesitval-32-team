import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.eveme.nl',
    port: 465,
    secure: true,
    auth: {
      user: 'info@eveme.nl',
      pass: process.env.MAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Festival32" <info@festival32.nl>', // sender address
    to,
    subject,
    html,
  });
};

export default sendEmail;
