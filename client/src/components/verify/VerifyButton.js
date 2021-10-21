import React, { useState } from 'react';
import { showAlert } from '../../actions/alertActions';
import { useValue } from '../../context/globalContext';
import { LoadingButton } from '@mui/lab';
import EmailIcon from '@mui/icons-material/Email';
import { sendVerifyEmail } from '../../actions/userActions';

const VerifyButton = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { user },

    dispatch,
  } = useValue();

  const verifyEmailHandler = async () => {
    setLoading(true);

    const response = await sendVerifyEmail(user.result);
    if (response.success) {
      setLoading(false);
      showAlert(
        'success',
        'Check your mailbox to verify your account',
        dispatch,
      );
    } else if (!response.success) {
      setLoading(false);
      showAlert('danger', response.msg, dispatch);
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
