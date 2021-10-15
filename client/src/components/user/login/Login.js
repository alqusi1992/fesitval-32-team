import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../../alert/Alert';
import { showAlert } from '../../../actions/alertActions';
import { useValue } from '../../../context/globalContext';
import { login } from '../../../actions/userActions';
import { useStyles } from './LoginStyles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';

const Login = ({ setIsRegister }) => {
  const history = useHistory();
  const localEmail = getLocalStorage('remember-email');
  const rememberedEmail = localEmail !== null ? localEmail : '';
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: rememberedEmail,
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const {
    dispatch,
    state: { alert },
  } = useValue();

  const loginHandler = async (e) => {
    e.preventDefault();
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

  const classes = useStyles();

  return (
    <>
      {alert.isAlert && <Alert />}
      <form onSubmit={loginHandler}>
        <div className={classes.FieldsContainer}>
          <div className={classes.FieldsContainer}>
            <label className={classes.FormLabel} htmlFor='email'>
              Email
            </label>
            <input
              className={classes.InputControl}
              type='email'
              name='email'
              id='email'
              required
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className={classes.FieldsContainer}>
            <label className={classes.FormLabel} htmlFor='password'>
              Password
            </label>
            <input
              className={classes.InputControl}
              type='password'
              name='password'
              id='password'
              required
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckBox}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label='Remember me.'
          />
        </div>
        <div className={classes.BtnContainer}>
          <button className={classes.ButtonPrimary} type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
