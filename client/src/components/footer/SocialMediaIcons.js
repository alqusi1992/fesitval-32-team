import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@mui/material';
import { classes } from './FooterStyles';

const { facebookIcon, instagramIcon, youTubeIcon } = classes;
const SocialMediaIcons = () => {
  return (
    <>
      <Grid item xm={2}>
        <FacebookIcon sx={facebookIcon} />
      </Grid>
      <Grid item xm={2}>
        <InstagramIcon sx={instagramIcon} />
      </Grid>
      <Grid item xm={2}>
        <YouTubeIcon sx={youTubeIcon} />
      </Grid>
    </>
  );
};

export default SocialMediaIcons;
