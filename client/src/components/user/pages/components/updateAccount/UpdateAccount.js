import React, { useState } from 'react';
import { UpdateUser } from '../../../../../actions/profileAction';
import { useValue } from '../../../../../context/globalContext';
import Box from '@mui/material/Box';
import { TextField, Button, FormControl, InputAdornment, IconButton } from '@mui/material';
import { useStyles } from '../manageAccount/accountStyles';
import { useForm } from 'react-hook-form';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Alert from '../../../../alert/Alert';
import { showAlert } from '../../../../../actions/alertActions';

const UpdateAccount = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [data, setData] = useState({ showCurrentPassword: false, showNewPassword: false });
  const {
    dispatch,
    state: { user },
    state: { alert },
  } = useValue();

  const fetchUser = async () => {
    try {
      const response = await UpdateUser(user, data);
      if (response.success) {
        showAlert('success', 'The Form Is Updated', dispatch);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickCurrentPassword = () => {
    setData({
      ...data,
      showCurrentPassword: !data.showCurrentPassword,
    });
  };
  const handleClickNewPassword = () => {
    setData({
      ...data,
      showNewPassword: !data.showNewPassword,
    });
  };

  return (
    <>
      <Box
        className={classes.formmUpdate}
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        {<div className={classes.alertStyle}>{alert.isAlert && <Alert />}</div>}
        <TextField
          error={errors?.firstName?.type ? true : false}
          label='FirstName'
          variant='standard'
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          helperText={errors?.firstName?.message}
          {...register('firstName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Insert only letters',
            },
          })}
        />
        <TextField
          error={errors?.lastName?.type ? true : false}
          label='LastName'
          variant='standard'
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          helperText={errors?.lastName?.message}
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Insert only letters',
            },
          })}
        />
        <TextField
          error={errors?.email?.type ? true : false}
          label='Emial'
          variant='standard'
          onChange={(e) => setData({ ...data, email: e.target.value })}
          helperText={errors?.email?.message}
          {...register('email', {
            pattern: {
              value:
                /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Insert a valid email!',
            },
          })}
        />
        <TextField
          error={errors?.phone?.type ? true : false}
          label='Phone'
          variant='standard'
          helperText={errors?.phone?.message}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          {...register('phone', {
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
              message: 'Insert Valid Phone Number',
            },
          })}
        />
        <FormControl sx={{ m: 1, width: '25ch', position: 'relative' }} variant='standard'>
          <TextField
            label='CurrentPassword'
            variant='standard'
            onChange={(e) => setData({ ...data, currentPassword: e.target.value })}
            type={data.showCurrentPassword ? 'text' : 'password'}
          />
          <InputAdornment sx={{ position: 'absolute', right: '0', top: '30px' }}>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickCurrentPassword}
            >
              {data.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch', position: 'relative' }} variant='standard'>
          <TextField
            error={errors?.password?.type ? true : false}
            label='NewPassword'
            variant='standard'
            onChange={(e) => setData({ ...data, newPassword: e.target.value })}
            type={data.showNewPassword ? 'text' : 'password'}
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
          <InputAdornment sx={{ position: 'absolute', right: '0', top: '30px' }}>
            <IconButton aria-label='toggle password visibility' onClick={handleClickNewPassword}>
              {data.showNewPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>
        {}
        <Button
          className={classes.buttonUpdate}
          variant='contained'
          onClick={handleSubmit(fetchUser)}
          sx={{ display: 'block', marginLeft: '100px' }}
        >
          SUBMIT
        </Button>
      </Box>
    </>
  );
};

export default UpdateAccount;
