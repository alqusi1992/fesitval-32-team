import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from './FooterStyles';

const FooterLogo = () => {
  return (
    <Link to='/'>
      <Grid sx={classes.logo}>Festival32</Grid>
    </Link>
  );
};

export default FooterLogo;
