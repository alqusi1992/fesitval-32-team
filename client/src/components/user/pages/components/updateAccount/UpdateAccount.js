import React, { useState } from 'react';
import { UpdateUser } from '../../../../../actions/profileAction';
import { useValue } from '../../../../../context/globalContext';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useStyles } from '../manageAccount/accountStyles';

const UpdateAccount = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const {
    state: { user },
  } = useValue();

  const fetchUser = async () => {
    try {
      const response = await UpdateUser(user, data);
      if (response.success) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      className={classes.formmUpdate}
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='standard-basic'
        label='FirstName'
        variant='standard'
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='LastName'
        variant='standard'
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='Emial'
        variant='standard'
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='Phone'
        variant='standard'
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='CurrentPassword'
        variant='standard'
        onChange={(e) => setData({ ...data, currentPassword: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='NewPassword'
        variant='standard'
        onChange={(e) => setData({ ...data, newPassword: e.target.value })}
      />

      <Button
        className={classes.buttonUpdate}
        variant='contained'
        onClick={fetchUser}
        sx={{ display: 'block', marginLeft: '100px' }}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default UpdateAccount;
