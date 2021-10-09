import React, { useCallback, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Alert from '../alert/Alert';
import { useValue } from '../../context/globalContext';
import { showAlert } from '../../actions/alertActions';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { LoadingButton } from '@mui/lab';
import '../../app.css';

import { Grid } from '@mui/material';
export const SuccessPage = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    dispatch,
    state: { alert },
  } = useValue();

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
  }, [dispatch]);

  const downloadOrder = async () => {
    setLoading(true);
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
    if (blob) {
      setLoading(false);
    }
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    saveAs(pdfBlob, `${order._id}.pdf`);
  };

  useEffect(() => {
    createOrder();
  }, [createOrder]);

  return (
    <>
      {alert.isAlert ? (
        <Alert />
      ) : (
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
              <LoadingButton
                endIcon={<FileDownloadIcon />}
                onClick={downloadOrder}
                loading={loading}
                loadingPosition='end'
                variant='contained'
              >
                Download order
              </LoadingButton>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
