import { Grid } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/globalContext';
import VerifyButton from './VerifyButton';
import { useStyles } from './verifyStyle';

const Verify = () => {
  const {
    state: { user },
  } = useValue();
  const classes = useStyles();

  return (
    <>
      {user?.result?.isVerified === false && (
        <Grid container justifyContent='center'>
          {' '}
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
          <Grid container item md={4} sm={5} margin='5px' className={classes.verifyButton}>
            <VerifyButton />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Verify;
