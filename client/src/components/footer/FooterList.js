import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '..';
import { classes } from './FooterStyles';

const FooterList = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <Grid sx={classes.list}>
        <Link to='/program'>
          <Grid sx={classes.listItem}>Program</Grid>
        </Link>
        <Link to='/tickets'>
          <Grid sx={classes.listItem}>Tickets</Grid>
        </Link>
        <Link to='/about'>
          <Grid sx={classes.listItem}>About</Grid>
        </Link>
      </Grid>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );
};

export default FooterList;
