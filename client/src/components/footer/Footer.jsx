import { Grid } from '@mui/material';
import React from 'react';
import { FooterWrapper } from './FooterStyles';
import FooterList from './FooterList';
import SocialMediaIcons from './SocialMediaIcons';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Grid container alignItems='space-between' height='100%'>
        <Grid
          item
          md={6}
          xs={12}
          container
          justifyContent='center'
          alignItems='center'
        >
          <FooterLogo />
        </Grid>
        <Grid item md={3} xs={12}>
          <FooterList />
        </Grid>
        <Grid
          item
          md={1}
          xs={12}
          container
          justifyContent='center'
          alignItems='center'
        >
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;
