import pdf from 'html-pdf';
import path from 'path';
import pdfTemplate from '../orders/index.js';

const dirname = path.resolve();

export const createPdf = async (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile(`${dirname}/orders/order.pdf`, (err) => {
    if (err) {
      res.send(Promise.reject(new Error('failed to save pdf')));
    }

    res.send(Promise.resolve());
  });
};

export const getOrderPdf = (req, res) => {
  res.sendFile(`${dirname}/orders/order.pdf`);
};
