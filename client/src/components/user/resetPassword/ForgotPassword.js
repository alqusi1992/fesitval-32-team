import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { SendLink } from '../../../actions/passwordAction';
import { Button } from '@mui/material';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
      <Button type='submit' onClick={handleSubmit(SendLink)}>
        SEND
      </Button>
    </>
  );
};

export default ForgotPassword;
