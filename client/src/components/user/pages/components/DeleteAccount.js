import React, { useState } from 'react';
import { deleteUser } from '../../../../actions/profileAction';
import { useValue } from '../../../../context/globalContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DeleteAccount = () => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const {
    state: { user },
  } = useValue();

  const fetchUser = async () => {
    const response = await deleteUser(user, userPassword);
    if (response.success) {
      setDeleteAccount(true);
    }

    alert(deleteAccount && 'account deleted');
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
          DELETE
        </Button>
      </Box>
    </>
  );
};

export default DeleteAccount;
