import { useState } from 'react';
import {
  ModalContainer,
  ModalBackdrop,
  Modal,
  CancelContainer,
  LogInRegister,
  classes,
} from './UserStyles';
import CloseIcon from '@mui/icons-material/Close';
import Register from './register/Register';
import Login from './login/Login';
import ForgotPassword from './resetPassword/ForgotPassword';
import { Box } from '@mui/system';

const User = ({ setIsRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  const closeRegister = () => setIsRegister(false);

  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeRegister} />
      <Modal>
        <CancelContainer>
          <CloseIcon onClick={closeRegister} />
        </CancelContainer>
        {showEmail ? (
          <>
            <LogInRegister onClick={() => setShowEmail(!showEmail)}>
              Back
            </LogInRegister>
            <ForgotPassword />
          </>
        ) : (
          <>
            {isLogin ? (
              <Login setIsRegister={setIsRegister} />
            ) : (
              <Register setIsRegister={setIsRegister} />
            )}
            {isLogin && (
              <Box sx={classes.loginOptionsContainer}>
                <LogInRegister onClick={() => setShowEmail(!showEmail)}>
                  Forgot password?
                </LogInRegister>
                <LogInRegister onClick={() => setIsLogin(false)}>
                  Create account
                </LogInRegister>
              </Box>
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
          </>
        )}
      </Modal>
    </ModalContainer>
  );
};

export default User;
