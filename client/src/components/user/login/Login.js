import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../../alert/Alert';
import { showAlert } from '../../../actions/alertActions';
import { useValue } from '../../../context/globalContext';
import { login } from '../../../actions/userActions';
import { classes } from './LoginStyles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';

const { fieldsContainer, inputAdornment, rememberMe, btnContainer, btn } =
  classes;

const Login = ({ setIsRegister }) => {
  const history = useHistory();
  const localEmail = getLocalStorage('remember-email');
  const rememberedEmail = localEmail !== null ? localEmail : '';

  const {
    handleSubmit,
    register: LoginForm,
    formState: { errors },
  } = useForm();
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
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const {
    dispatch,
    state: { alert },
  } = useValue();

  const loginHandler = async (userData) => {
    const response = await login(userData, dispatch);
    if (response.success) {
      if (checked === true) {
        setLocalStorage('remember-email', response.result.email);
      }
      setIsRegister(false);
      history.push('/');
    } else {
      showAlert('danger', response.msg, dispatch);
    }
  };

  return (
    <>
      {alert.isAlert && <Alert />}
      <form>
        <Box sx={fieldsContainer}>
          <FormControl>
            <TextField
              variant='standard'
              label='Email'
              placeholder='email@example.com'
              defaultValue={rememberedEmail}
              error={errors?.email?.type ? true : false}
              helperText={errors?.email?.message}
              {...LoginForm('email', {
                required: 'Please insert your email!',
                pattern: {
                  value:
                    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Insert a valid email!',
                },
              })}
            />
          </FormControl>

          <FormControl variant='standard'>
            <TextField
              variant='standard'
              label='password'
              placeholder='Password'
              error={errors?.password?.type ? true : false}
              helperText={errors?.password?.message}
              type={showPassword.newPassword ? 'text' : 'password'}
              {...LoginForm('password', {
                required: 'Please insert a password!',
              })}
            />
            <InputAdornment position='end' sx={inputAdornment}>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
              >
                {!showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </FormControl>
        </Box>
        <Box>
          <FormControlLabel
            sx={rememberMe}
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckBox}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label='Remember me.'
          />
        </Box>
        <Box sx={btnContainer}>
          <Button
            variant='contained'
            onClick={handleSubmit(loginHandler)}
            sx={btn}
          >
            Log in
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
