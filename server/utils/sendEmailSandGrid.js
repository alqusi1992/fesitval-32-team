import sgMail from '@sendgrid/mail';

const sendEmailSandGrid = async (toEmail, subject, html) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: toEmail,
    from: `${process.env.SENDGRID_EMAIL}`,
    subject,
    html,
  };

  await sgMail.send(msg);
};

export default sendEmailSandGrid;
