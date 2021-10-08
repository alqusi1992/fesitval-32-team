import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';

export const SuccessPage = () => {
  const createOrder = async () => {
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));

    localStorage.removeItem('orderInfo');

    if (orderInfo !== null) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/order`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
          },
        );

        const res = await response.json();
        const { orderId } = res;

        if (orderId) {
          const getPdf = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/pdf/order-pdf`,
            {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ orderId }),
            },
          );

          const blob = await getPdf.blob();
          const pdfBlob = new Blob([blob], { type: 'application/pdf' });
          saveAs(pdfBlob, `${orderId}.pdf`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  useEffect(() => {
    createOrder();
  }, []);

  return <div>The Order has been successfully paid</div>;
};
