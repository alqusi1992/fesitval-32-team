import React from 'react';
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItem } from './ListItem';
import { NavDrawer } from './NavDrawer';
import { useStyles } from './NavStyles';
import NavUser from './NavUser/NavUser';
import { Link } from 'react-router-dom';

export const NavBar = ({ drawer, setDrawer, handleDrawer, isMatch }) => {
  const classes = useStyles({ drawer });
  return (
    <AppBar position='sticky' className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Grid container maxWidth='xs' className={classes.logoContainer}>
          <Grid item>
            <Typography
              variant='h6'
              to='/'
              className={classes.logo}
              component={Link}
              sx={{ flexGrow: 1 }}
            >
              Festival32
            </Typography>
          </Grid>
          <Grid item>
            <Box className={classes.navDate}>
              <Typography
                className={classes.dateText}
                variant='subtitle1'
                component='div'
                sx={{ flexGrow: 1 }}
              >
                4th october 2021 11:00-23:00
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {isMatch && (
          <Grid container className={classes.listItemContainer} spacing={3}>
            <ListItem label='program' drawer={drawer} />
            <ListItem label='about' drawer={drawer} />
            <ListItem label='tickets' drawer={drawer} />
            <ListItem label='contact' drawer={drawer} />
          </Grid>
        )}
        <div className={classes.loginHamburgerWrapper}>
          <NavUser drawer={drawer} setDrawer={setDrawer} />
          {!isMatch && (
            <div className={classes.iconButtonContainer}>
              <IconButton
                className={classes.iconBtn}
                onClick={() => handleDrawer(true)}
                size='large'
                edge='end'
                color='secondary'
                aria-label='menu'
                sx={{ mr: 2 }}
              >
                <MenuIcon color='secondary' />
              </IconButton>
            </div>
          )}
        </div>
      </Toolbar>
      <NavDrawer drawer={drawer} handleDrawer={handleDrawer} />
    </AppBar>
  );
};
