import React, { useCallback, useEffect, useState } from 'react';
import OrderDisplay from '../ordersDisplay/OrderDisplay';
import { Grid } from '@mui/material';
import '../../app.css';
import { DownloadButton } from '../downloadButton/DownloadButton';

export const SuccessPage = () => {
  const [order, setOrder] = useState({});

  const createOrder = useCallback(async () => {
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
          }
        );

        const { order } = await response.json();
        setOrder(order);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('no order found');
    }
  }, []);

  useEffect(() => {
    createOrder();
  }, [createOrder]);

  return (
    <>
      {order.tickets ? (
        <>
          <Grid container justifyContent='center'>
            <Grid
              container
              justifyContent='center'
              item
              xs={12}
              className='py-3'
            >
              The Order has been successfully paid
            </Grid>
            <Grid container justifyContent='center' item xs={12}>
              <Grid item xs={12}>
                <div className='main-container'>
                  <div className='check-container'>
                    <div className='check-background'>
                      <svg
                        viewBox='0 0 65 51'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 25L27.3077 44L58.5 7'
                          stroke='white'
                          strokeWidth='13'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='check-shadow'></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={11} md={6}>
                {order.tickets && <OrderDisplay order={order} />}
              </Grid>
              <Grid container justifyContent='center' item xs={12}>
                <DownloadButton order={order} />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container justifyContent='center'>
          <Grid container justifyContent='center' item xs={12}>
            THERE IS NO ORDER
          </Grid>
        </Grid>
      )}
    </>
  );
};
