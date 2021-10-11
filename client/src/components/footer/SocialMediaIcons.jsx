import React from 'react'
import {FacebookIcon, InstagramIcon, YouTubeIcon} from '@mui/icons-material';
import { Grid } from '@mui/material';


const SocialMediaIcons = () => {
    return (
        <Grid container >
            <Grid item xm={2}><FacebookIcon/></Grid>
            <Grid item xm={2}><InstagramIcon/></Grid>
            <Grid item xm={2}><YouTubeIcon/></Grid>
            
        </Grid>
    )
}

export default SocialMediaIcons
