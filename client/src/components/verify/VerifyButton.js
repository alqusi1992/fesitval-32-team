import React, { useState } from 'react';
import { showAlert } from '../../actions/alertActions';
import { useValue } from '../../context/globalContext';
import { LoadingButton } from '@mui/lab';
import EmailIcon from '@mui/icons-material/Email';

const VerifyButton = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { user },

    dispatch,
  } = useValue();

  const verifyEmailHandler = async () => {
    setLoading(true);
    const { _id, email } = user.result;
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/verification/send-email`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ _id, email }),
      });
      const response = await res.json();
      if (response.success) {
        setLoading(false);
        showAlert('success', 'Check your mailbox to verify your account', dispatch);
      } else if (!response.success) {
        showAlert('danger', response.msg, dispatch);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <LoadingButton
        endIcon={<EmailIcon />}
        onClick={verifyEmailHandler}
        loading={loading}
        loadingPosition='end'
        variant='contained'
      >
        Verify Email
      </LoadingButton>
    </>
  );
};

export default VerifyButton;
