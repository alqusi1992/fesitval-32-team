import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormWrapper,
  ButtonWrapper,
  InputWrapper,
  PWrapper,
} from './GuestFormStyles';
import { useGuestContext } from '../../../context/guestContext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const GuestForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { guestUserOrder, setGuestUserOrder } = useGuestContext();

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper
        type='text'
        placeholder='First name...'
        {...register('firstName', {
          required: 'Please enter your first name!',
        })}
        onChange={(e) =>
          setGuestUserOrder({ ...guestUserOrder, firstName: e.target.value })
        }
      />
      {errors.firstName && <PWrapper>{errors.firstName.message}</PWrapper>}
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          // error
          id='standard-textarea'
          label='First Name'
          placeholder='John'
          multiline
          variant='standard'
          helperText='Incorrect entry.'
        />
      </FormControl> */}
      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          id='standard-textarea'
          label='Last Name'
          placeholder='Doe'
          multiline
          variant='standard'
          {...register('lastName', { pattern: /^[A-Za-z]+$/i, required: true })}
        />
        {errors?.lastName?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
        <TextField
          id='standard-textarea'
          label='E-mail Address'
          placeholder='example@example.com'
          multiline
          variant='standard'
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
        <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}

      <button type='submit'>submit</button>
    </FormWrapper>
  );
};

export default GuestForm;
