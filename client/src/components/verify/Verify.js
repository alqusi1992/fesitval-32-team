import { Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useValue } from '../../context/globalContext';
import Alert from '../alert/Alert';
import VerifyButton from './VerifyButton';
import { useStyles } from './verifyStyle';

const Verify = () => {
  const {
    state: { user, alert },
  } = useValue();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const verified = useQuery().get('isVerified');
  const classes = useStyles();

  return (
    <>
      {user?.result?.isVerified === false && (
        <Grid
          container
          justifyContent='center'
          sx={{ position: 'absolute', top: '100px', zIndex: 1 }}
        >
          <Grid
            container
            item
            md={6}
            sm={5}
            margin='10px'
            color='red'
            className={classes.verifyText}
          >
            Your Email is not verified yet, please verify to get full access
          </Grid>
          <Grid
            container
            item
            md={4}
            sm={5}
            margin='5px'
            className={classes.verifyButton}
          >
            <VerifyButton />
          </Grid>
        </Grid>
      )}
      <Grid sx={{ position: 'relative', top: '50px' }}>
        {alert.isAlert && !verified ? <Alert /> : ''}
      </Grid>
    </>
  );
};

export default Verify;
