import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { register } from '../../../actions/userActions';
import { useValue } from '../../../context/globalContext';
import Alert from '../../alert/Alert';
import { showAlert } from '../../../actions/alertActions';
import { FieldsContainer, FormGroup, BtnContainer } from './RegisterStyles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton } from '@mui/material';

const Register = ({ setIsRegister }) => {
  const history = useHistory();
  const {
    handleSubmit,
    register: registerForm,
    formState: { errors },
  } = useForm();

  const {
    dispatch,
    state: { alert },
  } = useValue();

  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

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

  const registerHandler = async (userData) => {
    if (userData.password === userData.confirmPassword) {
      const response = await register(userData, dispatch);
      if (response.success) {
        setIsRegister(false);
        history.push('/account');
      } else {
        showAlert('danger', response.msg, dispatch);
      }
    } else {
      showAlert('danger', "passwords don't match", dispatch);
    }
  };

  return (
    <>
      {alert.isAlert && <Alert />}
      <form>
        <FieldsContainer>
          <FormControl variant='standard'>
            <TextField
              variant='standard'
              type='text'
              label='First Name'
              placeholder='John'
              multiline
              error={errors?.firstName?.type ? true : false}
              helperText={errors?.firstName?.message}
              {...registerForm('firstName', {
                required: 'Please insert your first name!',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Insert only letters',
                },
              })}
            />
          </FormControl>
          <FormControl variant='standard'>
            <TextField
              variant='standard'
              type='text'
              label='Last name'
              placeholder='Doe'
              error={errors?.lastName?.type ? true : false}
              helperText={errors?.lastName?.message}
              {...registerForm('lastName', {
                required: 'Please insert your last name!',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Insert only letters',
                },
              })}
            />
          </FormControl>{' '}
          <FormControl variant='standard'>
            <TextField
              variant='standard'
              label='Email'
              placeholder='email@example.com'
              error={errors?.email?.type ? true : false}
              helperText={errors?.email?.message}
              {...registerForm('email', {
                required: 'Please insert your email!',
                pattern: {
                  value:
                    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Insert a valid email!',
                },
              })}
            />
          </FormControl>{' '}
          <FormControl variant='standard'>
            <TextField
              variant='standard'
              type='tel'
              label='Phone'
              error={errors?.phone?.type ? true : false}
              helperText={errors?.phone?.message}
              {...registerForm('phone', {
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                  message: 'Insert Valid Phone Number',
                },
              })}
            />
          </FormControl>{' '}
          <FormControl sx={{ position: 'relative' }} variant='standard'>
            <TextField
              variant='standard'
              label='password'
              placeholder='Password'
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
          <FormControl sx={{ position: 'relative' }} variant='standard'>
            <TextField
              error={errors?.confirmPassword?.type ? true : false}
              label='Confirm password'
              placeholder='Confirm Password'
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
        </FieldsContainer>
        <BtnContainer>
          <Button
            variant='contained'
            onClick={handleSubmit(registerHandler)}
            sx={{ marginTop: '20px', padding: '10px 30px' }}
          >
            Submit
          </Button>
        </BtnContainer>
      </form>
    </>
  );
};

export default Register;
