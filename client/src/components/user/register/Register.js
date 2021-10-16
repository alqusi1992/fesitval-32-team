import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { register } from '../../../actions/userActions';
import { useValue } from '../../../context/globalContext';
import Alert from '../../alert/Alert';
import { showAlert } from '../../../actions/alertActions';
import {
  FieldsContainer,
  FormGroup,
  FormLabel,
  InputControl,
  ButtonPrimary,
  BtnContainer,
} from './RegisterStyles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IconButton } from '@mui/material';

const Register = ({ setIsRegister }) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const {
    handleSubmit,
    register: registerForm,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
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

  const registerHandler = async (e) => {
    console.log(userData);
    if (userData.password === userData.confirmPassword) {
      const response = await register(userData, dispatch);
      if (response.success) {
        setIsRegister(false);
        history.push('/profile');
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
      <form onSubmit={handleSubmit(registerHandler)}>
        <FieldsContainer>
          <FormGroup>
            <TextField
              type='text'
              name='firstName'
              label='First Name'
              placeholder='John'
              multiline
              variant='standard'
              defaultValue={userData.firstName}
              onChange={handleChange}
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
          </FormGroup>
          <FormGroup>
            <TextField
              error={errors?.lastName?.type ? true : false}
              label='Last name'
              variant='standard'
              type='text'
              name='lastName'
              placeholder='Doe'
              defaultValue={userData.lastName}
              onChange={handleChange}
              helperText={errors?.lastName?.message}
              {...registerForm('lastName', {
                required: 'Please insert your last name!',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Insert only letters',
                },
              })}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              error={errors?.email?.type ? true : false}
              label='Email'
              variant='standard'
              name='email'
              placeholder='email@example.com'
              defaultValue={userData.email}
              onChange={handleChange}
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
          </FormGroup>
          <FormGroup>
            <TextField
              error={errors?.phone?.type ? true : false}
              label='Phone'
              variant='standard'
              helperText={errors?.phone?.message}
              type='tel'
              name='phone'
              defaultValue={userData.phone}
              onChange={handleChange}
              {...registerForm('phone', {
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                  message: 'Insert Valid Phone Number',
                },
              })}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              sx={{ m: 1, width: '25ch', position: 'relative' }}
              variant='standard'
            >
              <TextField
                error={errors?.password?.type ? true : false}
                label='password'
                placeholder='Password'
                variant='standard'
                helperText={errors?.password?.message}
                name='password'
                defaultValue={userData.password}
                onChange={handleChange}
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
                sx={{ position: 'absolute', right: '0', top: '30px' }}
              >
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                >
                  {showPassword.newPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl
              sx={{ m: 1, width: '25ch', position: 'relative' }}
              variant='standard'
            >
              <TextField
                error={errors?.password?.type ? true : false}
                label='Confirm password'
                placeholder='Confirm Password'
                variant='standard'
                helperText={errors?.password?.message}
                name='confirmPassword'
                defaultValue={userData.confirmPassword}
                onChange={handleChange}
                type={showPassword.confirmPassword ? 'text' : 'password'}
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
                sx={{ position: 'absolute', right: '0', top: '30px' }}
              >
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowConfirmPassword}
                >
                  {showPassword.confirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            </FormControl>
          </FormGroup>
        </FieldsContainer>
        <BtnContainer>
          <ButtonPrimary type='submit'>Submit</ButtonPrimary>
        </BtnContainer>
      </form>
    </>
  );
};

export default Register;

/*
 <TextField
        error={errors?.firstName?.type ? true : false}
        label='FirstName'
        variant='standard'
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
        helperText={errors?.firstName?.message}
        {...register('firstName', {
          required: 'Please insert your first name!',
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
          required: 'Please insert your last name!',
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
          required: 'Please insert your email!',
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
          <IconButton aria-label='toggle password visibility' onClick={handleClickCurrentPassword}>
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

      <Button
        className={classes.buttonUpdate}
        variant='contained'
        onClick={handleSubmit(fetchUser)}
        sx={{ display: 'block', marginLeft: '100px' }}
      >
        SUBMIT
      </Button>
*/
