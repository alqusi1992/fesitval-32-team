import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { SendLink } from '../../../actions/passwordAction';
import { Button } from '@mui/material';
import { FormWrapper } from './ForgotPasswordStyles';
import { useValue } from '../../../context/globalContext';
import { showAlert } from '../../../actions/alertActions';
import Alert from '../../alert/Alert';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    dispatch,
    state: { alert },
  } = useValue();

  const forgotPasswordHandler = async (email) => {
    const response = await SendLink(email, dispatch);
    if (response.success) {
      showAlert(
        'success',
        'Check your inbox! The reset link has been sent.',
        dispatch
      );
    } else {
      showAlert('danger', response.msg, dispatch);
    }
  };

  return (
    <>
      {alert.isAlert && <Alert />}
      <FormWrapper>
        <TextField
          variant='standard'
          label='Email'
          placeholder='email@example.com'
          error={errors?.email?.type ? true : false}
          helperText={errors?.email?.message}
          {...register('email', {
            required: 'Please insert your email!',
            pattern: {
              value:
                /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Insert a valid email!',
            },
          })}
        />
        <Button
          sx={{ m: '15px' }}
          variant='contained'
          type='submit'
          onClick={handleSubmit(forgotPasswordHandler)}
        >
          RESET PASSWORD
        </Button>
      </FormWrapper>
    </>
  );
};

export default ForgotPassword;
