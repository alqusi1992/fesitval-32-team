import React, { useState } from 'react';
import { deleteUser } from '../../../../actions/profileAction';
import { useValue } from '../../../../context/globalContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { logout } from '../../../../actions/userActions';
import { useHistory } from 'react-router';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const DeleteAccount = () => {
  const history = useHistory();
  const [userPassword, setUserPassword] = useState('');
  const {
    state: { user },
    dispatch,
  } = useValue();

  const fetchUser = async () => {
    try {
      const response = await deleteUser(user, userPassword);
      if (response.success) {
        logout(dispatch);
        history.push('/');
        setUserPassword('');
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
