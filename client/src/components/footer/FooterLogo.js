import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from './FooterStyles';

const { logo } = classes;
const FooterLogo = () => {
  return (
    <Link to='/'>
      <Grid sx={logo}>Festival32</Grid>
    </Link>
  );
};

export default FooterLogo;
