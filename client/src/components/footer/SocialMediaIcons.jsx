import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@mui/material';

const SocialMediaIcons = () => {
  return (
    <Grid container justifyContent='space-between' sx={{ paddingTop: '20px' }}>
      <Grid item xm={2}>
        <FacebookIcon sx={{ color: '#1877F2', fontSize: '40px' }} />
      </Grid>
      <Grid item xm={2}>
        <InstagramIcon sx={{ color: '#E4405F', fontSize: '40px' }} />
      </Grid>
      <Grid item xm={2}>
        <YouTubeIcon sx={{ color: '#CD201F', fontSize: '40px' }} />
      </Grid>
    </Grid>
  );
};

export default SocialMediaIcons;
