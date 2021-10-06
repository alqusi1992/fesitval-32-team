import { useState } from 'react';
import {
  FormGroup,
  FormLabel,
  InputControl,
  FieldsContainer,
  ButtonPrimary,
  BtnContainer,
} from './RegisterStyles';
import { useValue } from '../../../context/globalContext';
import { register } from '../../../actions/userActions';

const Register = ({ setIsRegister }) => {
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
  const registerHandler = async (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      const response = await register(userData, dispatch);
      if (response.success) {
        alert('your account created successfully');
        setIsRegister(false);
      } else {
        alert(response.msg);
      }
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <form>
      <FieldsContainer>
        <FormGroup>
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <InputControl
            type='text'
            name='firstName'
            id='firstName'
            required
            value={userData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <InputControl
            type='text'
            name='lastName'
            id='lastName'
            required
            value={userData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
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
          <FormLabel htmlFor='phone'>Phone Number</FormLabel>
          <InputControl
            type='tel'
            name='phone'
            id='phone'
            value={userData.phone}
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
        <FormGroup>
          <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
          <InputControl
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            required
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        </FormGroup>
      </FieldsContainer>
      <BtnContainer>
        <ButtonPrimary type='submit' onClick={registerHandler}>
          Submit
        </ButtonPrimary>
      </BtnContainer>
    </form>
  );
};

export default Register;
