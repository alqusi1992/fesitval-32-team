import { Grid } from '@mui/material'
import React from 'react'
import {FooterWrapper} from './FooterStyles'
import FooterList from './FooterList'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
    
    return (
        <FooterWrapper>
            <Grid container alignItems='space-between' height='100%'>
                <Grid item md={6} xs={12}></Grid>
                <Grid item md={3} xs={12}><FooterList/></Grid>
                <Grid item md={3} xs={12}><SocialMediaIcons/></Grid>
            </Grid>
        </FooterWrapper>
    )
}

export default Footer
