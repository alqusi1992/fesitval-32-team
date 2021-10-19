import { Button } from '@mui/material';
import React from 'react';
import { showAlert } from '../../actions/alertActions';
import { useValue } from '../../context/globalContext';
import Alert from '../alert/Alert';
import { useLocation } from 'react-router-dom';
const VerifyButton = () => {
  const {
    state: { user, alert },

    dispatch,
  } = useValue();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const verified = useQuery().get('isVerified');
  const verifyEmailHandler = async () => {
    const { _id, email } = user.result;
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/verification/send-email`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ _id, email }),
        },
      );
      const response = await res.json();
      if (response.success) {
        showAlert(
          'success',
          'Check your mailbox to verify your account',
          dispatch,
        );
      } else if (!response.success) {
        showAlert('danger', response.msg, dispatch);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant='contained' onClick={verifyEmailHandler}>
        Verify Email
      </Button>
      {alert.isAlert && !verified ? <Alert /> : ''}
    </>
  );
};

export default VerifyButton;
