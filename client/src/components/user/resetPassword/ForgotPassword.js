import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { SendLink } from '../../../actions/passwordAction';
import { Button } from '@mui/material';
import { FormWrapper } from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
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
        onClick={handleSubmit(SendLink)}
      >
        RESET PASSWORD
      </Button>
    </FormWrapper>
  );
};

export default ForgotPassword;
