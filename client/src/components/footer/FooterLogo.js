import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from './FooterStyles';
import logoImg from '../../images/logo.png';

const { logo } = classes;
const FooterLogo = () => {
  return (
    <Link to='/'>
      <Grid sx={logo}>
        <img src={logoImg} alt='' width='250px' />
      </Grid>
    </Link>
  );
};

export default FooterLogo;
