import React from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Alert from '../../../../alert/Alert';
import Box from '@mui/material/Box';
import { TextField, Button, FormControl, InputAdornment, IconButton } from '@mui/material';
import { useStyles } from '../manageAccount/accountStyles';
import { useForm } from 'react-hook-form';
import { valueValidationPattern } from '../../../../../utils/validationPatterns';

const UpdateItem = ({
  alert,
  fetchUser,
  handleClickCurrentPassword,
  handleClickNewPassword,
  showPassword,
}) => {
  const classes = useStyles();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { name, email, password, phone } = valueValidationPattern;

  return (
    <div>
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
          label='First name'
          variant='standard'
          helperText={errors?.firstName?.message}
          {...register('firstName', {
            pattern: {
              value: name,
              message: 'Insert only letters',
            },
          })}
        />
        <TextField
          error={errors?.lastName?.type ? true : false}
          label='Last name'
          variant='standard'
          helperText={errors?.lastName?.message}
          {...register('lastName', {
            pattern: {
              value: name,
              message: 'Insert only letters',
            },
          })}
        />
        <TextField
          error={errors?.email?.type ? true : false}
          label='Email'
          variant='standard'
          helperText={errors?.email?.message}
          {...register('email', {
            pattern: {
              value: email,
              message: 'Insert a valid email!',
            },
          })}
        />
        <TextField
          error={errors?.phone?.type ? true : false}
          label='Phone'
          variant='standard'
          helperText={errors?.phone?.message}
          {...register('phone', {
            pattern: {
              value: phone,
              message: 'Insert Valid Phone Number',
            },
          })}
        />
        <FormControl sx={{ m: 1, width: '25ch', position: 'relative' }} variant='standard'>
          <TextField
            error={errors?.currentPassword?.type ? true : false}
            label='Current password'
            variant='standard'
            type={showPassword.showCurrentPassword ? 'text' : 'password'}
            helperText={errors?.currentPassword?.message}
            {...register('currentPassword', {
              required: 'Please insert your currentPassword!',
            })}
          />
          <InputAdornment sx={{ position: 'absolute', right: '0', top: '30px' }}>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickCurrentPassword}
            >
              {showPassword.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch', position: 'relative' }} variant='standard'>
          <TextField
            error={errors?.newPassword?.type ? true : false}
            label='New password'
            variant='standard'
            type={showPassword.showNewPassword ? 'text' : 'password'}
            helperText={errors?.newPassword?.message}
            {...register('newPassword', {
              pattern: {
                value: password,
                message:
                  'Password should have at least 8 characters, one uppercase, one lowercase,one number and one special character!',
              },
            })}
          />
          <InputAdornment sx={{ position: 'absolute', right: '0', top: '30px' }}>
            <IconButton aria-label='toggle password visibility' onClick={handleClickNewPassword}>
              {showPassword.showNewPassword ? <VisibilityOff /> : <Visibility />}
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
    </div>
  );
};

export default UpdateItem;
