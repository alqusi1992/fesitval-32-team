import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../../alert/Alert';
import { showAlert } from '../../../actions/alertActions';
import { useValue } from '../../../context/globalContext';
import { login } from '../../../actions/userActions';
import { useStyles } from './LoginStyles';

const Login = ({ setIsRegister }) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const {
    dispatch,
    state: { alert },
  } = useValue();

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await login(userData, dispatch);
    if (response.success) {
      setIsRegister(false);
      history.push('/profile');
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
