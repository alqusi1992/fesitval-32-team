import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../../../actions/userActions';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const url = process.env.REACT_APP_SERVER_URL + '/user';

  const sendLink = async (data) => {
    // const response = await forgotPassword(email, dispatch)
    try {
      const response = await fetch(url + '/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
      <button type='submit' onClick={handleSubmit(sendLink)}>
        SEND
      </button>
    </>
  );
};

export default ForgotPassword;
