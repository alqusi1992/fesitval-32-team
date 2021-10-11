import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@mui/material';
import { iconsStyles } from './FooterStyles';

const SocialMediaIcons = () => {
  const { facebookIcon, instagramIcon, youTubeIcon } = iconsStyles();

  return (
    <Grid container justifyContent='space-between' sx={{ paddingTop: '20px' }}>
      <Grid item xm={2}>
        <FacebookIcon
          sx={{ fontSize: '40px', transition: 'all .2s' }}
          className={facebookIcon}
        />
      </Grid>
      <Grid item xm={2}>
        <InstagramIcon
          sx={{ fontSize: '40px', transition: 'all .2s' }}
          className={instagramIcon}
        />
      </Grid>
      <Grid item xm={2}>
        <YouTubeIcon
          sx={{ fontSize: '40px', transition: 'all .2s' }}
          className={youTubeIcon}
        />
      </Grid>
    </Grid>
  );
};

export default SocialMediaIcons;
