import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { deleteUser } from '../../../../actions/profileAction';
import { useValue } from '../../../../context/globalContext';
import { logout } from '../../../../actions/userActions';
import { useHistory } from 'react-router';

const DeleteAccount = () => {
  const history = useHistory();
  const [userPassword, setUserPassword] = useState('');
  const {
    state: { user },
    dispatch,
  } = useValue();

  const fetchUser = async () => {
    try {
      dispatch({ type: 'START_LOADING' });
      const response = await deleteUser(user, userPassword);
      if (response.success) {
        logout(dispatch);
        history.push('/');
        setUserPassword('');
        dispatch({ type: 'END_LOADING' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          label='Enter Password'
          value={userPassword}
          name='password'
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button variant='contained' onClick={fetchUser}>
          DELETE ACCOUNT
        </Button>
      </Box>
    </>
  );
};

export default DeleteAccount;
