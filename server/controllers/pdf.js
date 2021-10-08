import pdf from 'html-pdf';
import orderTemplate from '../orders/index.js';

export const createPdf = async (req, res) => {
  pdf.create(orderTemplate(req.body)).toStream((err, stream) => {
    if (err) return res.end(err.stack);

    res.setHeader('Content-type', 'application/pdf');
    res.setHeader('Content-Length', ` ${stream.length}`);

    return stream.pipe(res);
  });
};
