import { Grid } from '@mui/material';
import React from 'react';
import { classes } from './FooterStyles';
import FooterList from './FooterList';
import SocialMediaIcons from './SocialMediaIcons';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
      <Grid container sx={classes.footer}>
        <Grid
          item
          md={6}
          xs={12}
          container
          sx={classes.logoContainer}
        >
          <FooterLogo />
        </Grid>
        <Grid item md={3} xs={12}>
          <FooterList />
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          container
          sx={classes.socialIconsContainer}
        >
          <SocialMediaIcons />
        </Grid>
      </Grid>
  );
};

export default Footer;
