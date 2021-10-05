import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';
import { register } from '../../../actions/userActions';
import { useValue } from '../../../context/globalContext';
import {
  ModalContainer,
  ModalBackdrop,
  Modal,
  CancelContainer,
  FieldsContainer,
  FormGroup,
  FormLabel,
  InputControl,
  ButtonPrimary,
  BtnContainer,
} from './RegisterStyles';

const Register = ({ setIsRegister }) => {
  const closeRegister = () => setIsRegister(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      const response = register(userData, dispatch);
      if (response) {
        setIsRegister(false);
      }
    } else {
      alert("Passwords don't match");
    }
  };
  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeRegister} />
      <Modal>
        <CancelContainer>
          <CancelIcon onClick={closeRegister} />
        </CancelContainer>
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
            <ButtonPrimary type='submit' onClick={handleSubmit}>
              Submit
            </ButtonPrimary>
          </BtnContainer>
        </form>
      </Modal>
    </ModalContainer>
  );
};

export default Register;
