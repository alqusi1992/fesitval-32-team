import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { Button, IconButton } from '@mui/material';
import { SubmitNewPassword } from '../../../actions/passwordAction';
import { FormWrapper } from './ResetPasswordStyles';
import { showAlert } from '../../../actions/alertActions';
import { useValue } from '../../../context/globalContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Alert from '../../alert/Alert';

const ResetPassword = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const history = useHistory();
  const {
    handleSubmit,
    register: registerForm,
    formState: { errors },
  } = useForm();

  const { token } = useParams();

  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const smallScreen = useMediaQuery('(max-width:450px)');

  const handleClickShowPassword = () => {
    setShowPassword({
      ...showPassword,
      newPassword: !showPassword.newPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setShowPassword({
      ...showPassword,
      confirmPassword: !showPassword.confirmPassword,
    });
  };

  const {
    dispatch,
    state: { alert },
  } = useValue();

  const resetPasswordHandler = async (data) => {
    if (data.password === data.confirmPassword) {
      const response = await SubmitNewPassword(data.password, token, dispatch);
      if (response.success) {
        showAlert('success', 'Your password is updated!', dispatch);
        setIsUpdated(true);
      } else {
        showAlert('danger', response.msg, dispatch);
      }
    } else {
      showAlert('danger', 'Passwords are not matched!', dispatch);
    }
  };

  return (
    <>
      {alert.isAlert && <Alert />}
      {isUpdated ? (
        <div style={{ textAlign: 'center' }}>
          <Button
            sx={{ margin: '15px' }}
            variant='contained'
            type='submit'
            onClick={() => {
              history.push('/');
            }}
          >
            HOME
          </Button>
        </div>
      ) : (
        <FormWrapper>
          <FormControl
            sx={{
              position: 'relative',
              margin: '10px',
              width: `${smallScreen ? '100%' : '35%'}`,
            }}
            variant='standard'
          >
            <TextField
              variant='standard'
              label='New password'
              placeholder='New Password'
              error={errors?.password?.type ? true : false}
              helperText={errors?.password?.message}
              type={showPassword.newPassword ? 'text' : 'password'}
              {...registerForm('password', {
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
              position='end'
              sx={{ position: 'absolute', right: '0', top: '30px' }}
            >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
              >
                {!showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </FormControl>
          <FormControl
            sx={{
              position: 'relative',
              margin: '10px',
              width: `${smallScreen ? '100%' : '35%'}`,
            }}
            variant='standard'
          >
            <TextField
              error={errors?.confirmPassword?.type ? true : false}
              label='Confirm new password'
              placeholder='Confirm new Password'
              variant='standard'
              helperText={errors?.confirmPassword?.message}
              name='confirmPassword'
              type={showPassword.confirmPassword ? 'text' : 'password'}
              {...registerForm('confirmPassword', {
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
              position='end'
              sx={{ position: 'absolute', right: '0', top: '30px' }}
            >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowConfirmPassword}
              >
                {!showPassword.confirmPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          </FormControl>
          <Button
            sx={{ margin: '15px' }}
            variant='contained'
            type='submit'
            onClick={handleSubmit(resetPasswordHandler)}
          >
            SUBMIT
          </Button>
        </FormWrapper>
      )}
    </>
  );
};

export default ResetPassword;
