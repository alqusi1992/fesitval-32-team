import pdf from 'html-pdf';
import path from 'path';
import pdfTemplate from '../documents/index.js';

const dirname = path.resolve();

export const createPdf = async (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('order.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
};

export const getOrderPdf = (req, res) => {
  res.sendFile(`${dirname}/order.pdf`);
};
