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

  const {
    handleSubmit,

    formState: { errors },
  } = useForm();
  const registerForm = useForm().register;
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const {
    dispatch,
    state: { alert },
  } = useValue();

  const registerHandler = async (e) => {
    // e.preventDefault();
    // if (userData.password === userData.confirmPassword) {
    const response = await register(userData, dispatch);
    if (response.success) {
      setIsRegister(false);
      history.push('/profile');
    } else {
      showAlert('danger', response.msg, dispatch);
    }
    // } else {
    //   showAlert('danger', "passwords don't match", dispatch);
    // }
  };
  return (
    <>
      {alert.isAlert && <Alert />}
      <form onSubmit={handleSubmit(registerHandler)}>
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
            ></InputControl>
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
              // value={userData.password}
              // onChange={handleChange}
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
            {errors?.password && <p>{errors?.password?.message}</p>}
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
          <ButtonPrimary type='submit'>Submit</ButtonPrimary>
        </BtnContainer>
      </form>
    </>
  );
};

export default Register;
