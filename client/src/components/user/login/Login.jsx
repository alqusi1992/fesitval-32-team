import { useState } from 'react';
import {
  FormGroup,
  FormLabel,
  InputControl,
  FieldsContainer,
  ButtonPrimary,
  BtnContainer,
} from './LoginStyles';
import { useValue } from '../../../context/globalContext';
import { login } from '../../../actions/userActions';

const Login = ({ setIsRegister }) => {
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
  const { dispatch } = useValue();
  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await login(userData, dispatch);
    if (response.success) {
      alert('signed in successfully');
      setIsRegister(false);
    } else {
      console.log(response);
      alert(response.msg);
    }
  };

  return (
    <form>
      <FieldsContainer>
        <FormGroup>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <InputControl
            type='email'
            name='email'
            id='email'
            required
            value={userData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputControl
            type='password'
            name='password'
            id='password'
            required
            value={userData.password}
            onChange={handleChange}
          />
        </FormGroup>
      </FieldsContainer>
      <BtnContainer>
        <ButtonPrimary type='submit' onClick={loginHandler}>
          Submit
        </ButtonPrimary>
      </BtnContainer>
    </form>
  );
};

export default Login;
