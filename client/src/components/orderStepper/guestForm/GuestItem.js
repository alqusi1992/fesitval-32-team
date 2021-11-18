import React from 'react';
import { classes } from './GuestFormStyles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
const GuestItem = ({
  handleCheckBox,
  handleClickShowPassword,
  checked,
  values,
  register,
  errors,
  getValues,
}) => {
  const {
    formContainer,
    formControl,
    checkboxLabel,
    checkbox,
    formControlPassword,
    inputAdornment,
  } = classes;

  return (
    <Grid container sx={formContainer}>
      <h2>Fill in Your Personal Details </h2>
      <FormControl sx={classes.formControl} variant='standard'>
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

      <FormControl sx={formControl} variant='standard'>
        <TextField
          error={errors?.lastName?.type ? true : false}
          label='Last Name'
          placeholder='Doe'
          multiline
          variant='standard'
          defaultValue={values.userInfo.lastName}
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

      <FormControl sx={formControl} variant='standard'>
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
              value: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Insert a valid email!',
            },
          })}
        />
      </FormControl>

      <FormControl sx={formControl} variant='standard'>
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
        sx={checkboxLabel}
        control={
          <Checkbox
            sx={checkbox}
            checked={checked}
            onChange={handleCheckBox}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label='Create an Account'
      />

      {checked && (
        <FormControl sx={formControlPassword} variant='standard'>
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
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  'Password should have at least 8 characters, one uppercase, one lowercase,one number and one special character!',
              },
            })}
          />

          <InputAdornment sx={inputAdornment}>
            <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword}>
              {!values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>
      )}
    </Grid>
  );
};

export default GuestItem;
