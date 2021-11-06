import { Grid } from '@mui/material';
import React from 'react';
import { classes } from './FooterStyles';
import FooterList from './FooterList';
import SocialMediaIcons from './SocialMediaIcons';
import FooterLogo from './FooterLogo';

const { footer, logoContainer, socialIconsContainer } = classes;
const Footer = () => {
  return (
    <Grid container sx={footer}>
      <Grid item md={6} xs={12} container sx={logoContainer}>
        <FooterLogo />
      </Grid>
      <Grid item md={3} xs={12}>
        <FooterList />
      </Grid>
      <Grid item md={3} xs={12} container sx={socialIconsContainer}>
        <SocialMediaIcons />
      </Grid>
    </Grid>
  );
};

export default Footer;
