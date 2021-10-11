import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterLogo = () => {
  return (
    <Link to='/'>
      <Grid sx={{ fontSize: '50px', color: '#fff' }}>HackYourFestival</Grid>
    </Link>
  );
};

export default FooterLogo;
