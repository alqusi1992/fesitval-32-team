import { useState } from 'react';
import {
  ModalContainer,
  ModalBackdrop,
  Modal,
  CancelContainer,
  LogInRegister,
} from './UserStyles';
import CloseIcon from '@mui/icons-material/Close';
import Register from './register/Register';
import Login from './login/Login';

const User = ({ setIsRegister }) => {
  const [isLogin, setIsLogin] = useState(true);

  const closeRegister = () => setIsRegister(false);

  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeRegister} />
      <Modal>
        <CancelContainer>
          <CloseIcon onClick={closeRegister} />
        </CancelContainer>
        {isLogin ? (
          <Login setIsRegister={setIsRegister} />
        ) : (
          <Register setIsRegister={setIsRegister} />
        )}
        {isLogin && (
          <div style={{ marginTop: '20px' }}>
            Don't have an account yet?
            <LogInRegister onClick={() => setIsLogin(false)}>
              {' '}
              Register
            </LogInRegister>
          </div>
        )}
        {!isLogin && (
          <div style={{ marginTop: '20px' }}>
            Already have an account?
            <LogInRegister onClick={() => setIsLogin(true)}>
              {' '}
              Log In
            </LogInRegister>
          </div>
        )}
      </Modal>
    </ModalContainer>
  );
};

export default User;
