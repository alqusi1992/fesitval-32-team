import React, { useEffect, useState, useCallback } from 'react';
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

const GuestForm = ({
  setIsFormSubmitted,
  isTriggerSubmit,
  handleNext,
  setIsTriggerSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const {
    guestUserOrder: { userInfo },
    setGuestUserOrder,
  } = useGuestContext();

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    showPassword: false,
    userInfo: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
    },
  });

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const onSubmitCallback = useCallback(() => {
    const onSubmit = (data) => {
      setIsFormSubmitted(true);
      setGuestUserOrder((prev) => ({
        ...prev,
        userInfo: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password || null,
        },
      }));

      handleNext();
    };
    handleSubmit(onSubmit)();
  }, [handleSubmit, setIsFormSubmitted, setGuestUserOrder, handleNext]);

  useEffect(() => {
    if (isTriggerSubmit) {
      onSubmitCallback();
      setIsTriggerSubmit(false);
    }
  }, [onSubmitCallback, setIsTriggerSubmit, isTriggerSubmit]);

  return (
    <FormWrapper>
      <h2>Fill in Your Personal Details </h2>
      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.firstName?.type ? true : false}
          label='First Name'
          placeholder='John'
          multiline
          variant='standard'
          defaultValue={values.userInfo.firstName}
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
          error={errors?.confirmEmail?.type ? true : false}
          label='Confirm your E-mail Address'
          placeholder='example@example.com'
          multiline
          variant='standard'
          defaultValue={values.userInfo.email}
          helperText={
            errors?.confirmEmail?.type === 'validate'
              ? 'Your email does not match'
              : errors?.confirmEmail?.message
          }
          {...register('confirmEmail', {
            required: 'Please confirm your email!',
            validate: (value) => value === getValues('email'),
          })}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.email?.type ? true : false}
          label='E-mail Address'
          placeholder='example@example.com'
          multiline
          variant='standard'
          defaultValue={values.userInfo.email}
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
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          error={errors?.confirmEmail?.type ? true : false}
          label='Confirm your E-mail Address'
          placeholder='example@example.com'
          multiline
          variant='standard'
          defaultValue={values.userInfo.email}
          helperText={
            errors?.confirmEmail?.type === 'validate'
              ? 'Your email does not match'
              : errors?.confirmEmail?.message
          }
          {...register('confirmEmail', {
            required: 'Please confirm your email!',
            validate: (value) => value === getValues('email'),
          })}
        />
      </FormControl>

      <FormControlLabel
        sx={{ m: 1, width: '25ch', margin: '20px 0 10px -10px' }}
        control={
          <Checkbox
            sx={{ padding: '0 10px 0 0' }}
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
            error={errors?.password?.type ? true : false}
            label='password'
            placeholder='Password'
            variant='standard'
            defaultValue={values.userInfo.password}
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
            >
              {!values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>
      )}
    </FormWrapper>
  );
};

export default GuestForm;
