import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from './GuestFormStyles';
import { useGuestContext } from '../../../context/guestContext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const GuestForm = ({ setFormSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { guestUserOrder, setGuestUserOrder } = useGuestContext();

  const [values, setValues] = useState({
    showPassword: false,
  });
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    setFormSubmit(true);
    setGuestUserOrder({
      ...guestUserOrder,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password || null,
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.firstName?.type}
          id='standard-textarea'
          label='First Name'
          placeholder='John'
          multiline
          variant='standard'
          helperText={errors?.firstName?.message}
          {...register('firstName', {
            required: 'Please insert your first name!',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Insert only letters',
            },
          })}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.lastName?.type}
          id='standard-textarea'
          label='Last Name'
          placeholder='Doe'
          multiline
          variant='standard'
          helperText={errors?.lastName?.message}
          {...register('lastName', {
            required: 'Please insert your last name!',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Insert only letters',
            },
          })}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.email?.type}
          id='standard-textarea'
          label='E-mail Address'
          placeholder='example@example.com'
          multiline
          variant='standard'
          helperText={errors?.email?.message}
          {...register('email', {
            required: 'Please insert your email!',
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Insert a valid email!',
            },
          })}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckBox}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label='Create an Account'
      />
      {checked && (
        <FormControl
          sx={{ m: 1, width: '25ch', position: 'relative' }}
          variant='standard'
        >
          <TextField
            error={errors?.password?.type}
            id='standard-password-input'
            label='password'
            placeholder='Password'
            variant='standard'
            type={values.showPassword ? 'text' : 'password'}
            helperText={errors?.password?.message}
            {...register('password', {
              required: 'Please insert a password!',
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  'Password should have at least 8 characters, one uppercase, one lowercase,one number and one special character!',
              },
            })}
          />
          <InputAdornment
            sx={{ position: 'absolute', right: '0', top: '30px' }}
          >
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>
      )}

      <button type='submit'>submit</button>
    </FormWrapper>
  );
};

export default GuestForm;
