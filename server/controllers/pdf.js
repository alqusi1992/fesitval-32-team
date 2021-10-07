import pdf from 'html-pdf';
import path from 'path';
import fs from 'fs';
import orderTemplate from '../orders/index.js';

const dirname = path.resolve();

export const createPdf = async (req, res) => {
  pdf
    .create(orderTemplate(req.body), {})
    .toFile(`${dirname}/orders/${req.body.orderId}.pdf`, (err) => {
      if (err) {
        res.send(Promise.reject(new Error('failed to save pdf')));
      }

      res.send(Promise.resolve());
    });
};

export const getOrderPdf = (req, res) => {
  res.sendFile(`${dirname}/orders/${req.body.orderId}.pdf`);

  setTimeout(() => {
    fs.unlink(`${dirname}/orders/${req.body.orderId}.pdf`, (err) => {
      if (err) throw err;
      else {
        console.log(`${dirname}/orders/${req.body.orderId}.pdf is deleted`);
      }
    });
  }, 500);
};
