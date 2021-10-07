import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';

export const SuccessPage = () => {
  const createOrder = async () => {
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));

    localStorage.removeItem('orderInfo');

    if (orderInfo !== null) {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/order`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(orderInfo),
      });

      const res = await response.json();

      if (res.orderId) {
        const getPdf = await fetch(`${process.env.REACT_APP_SERVER_URL}/pdf/order-pdf`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ orderId: res.orderId }),
        });

        const blob = await getPdf.blob();
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        saveAs(pdfBlob, `${res.orderId}.pdf`);
      }
      console.log(res);
    }
  };
  useEffect(() => {
    createOrder();
  }, []);
  return <div>successPage</div>;
};
