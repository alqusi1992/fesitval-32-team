import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Alert from '../alert/Alert';
import { useValue } from '../../context/globalContext';
import { showAlert } from '../../actions/alertActions';

export const SuccessPage = () => {
  const [order, setOrder] = useState({});
  const {
    dispatch,
    state: { alert },
  } = useValue();

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

        const { order } = await response.json();
        setOrder(order);
      } catch (error) {
        console.log(error);
        showAlert('danger', error.message, dispatch);
      }
    } else {
      showAlert('danger', 'no order found', dispatch);
      console.log('no order found');
    }
  };
  const downloadOrder = async () => {
    const { email, tickets } = order;
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/pdf/create`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ orderId: order._id, email, tickets }),
      },
    );

    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    saveAs(pdfBlob, `${order._id}.pdf`);
  };

  useEffect(() => {
    createOrder();
  }, []);

  return (
    <>
      {alert.isAlert ? (
        <Alert />
      ) : (
        <>
          <div>The Order has been successfully paid </div>
          <button onClick={downloadOrder}>Download order</button>
        </>
      )}
    </>
  );
};
