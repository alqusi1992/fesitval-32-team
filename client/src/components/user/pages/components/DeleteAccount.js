import React, { useState } from 'react';
import { Box, TextField, Button, Modal, Typography } from '@mui/material';
import { deleteUser } from '../../../../actions/profileAction';
import { useValue } from '../../../../context/globalContext';
import { logout } from '../../../../actions/userActions';
import { useHistory } from 'react-router';

const DeleteAccount = () => {
  const history = useHistory();
  const [userPassword, setUserPassword] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    state: { user },
    dispatch,
  } = useValue();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const fetchUser = async () => {
    try {
      dispatch({ type: 'START_LOADING' });
      const response = await deleteUser(user, userPassword);
      if (response.success) {
        logout(dispatch);
        history.push('/');
        setUserPassword('');
        handleClose();
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
          justifyContent: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-search'
          label='Enter Password'
          type='search'
          variant='standard'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button
          variant='contained'
          onClick={handleOpen}
          sx={{ display: 'block' }}
        >
          DELETE ACCOUNT
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              This will remove your orders from the database!
            </Typography>
            <Button variant='contained' onClick={fetchUser}>
              Confirm
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default DeleteAccount;
