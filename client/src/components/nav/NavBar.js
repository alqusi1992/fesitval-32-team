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

export const NavBar = ({ drawer, handleDrawer, matches }) => {
  const classes = useStyles({ drawer });
  return (
    <AppBar position='sticky' className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Grid container maxWidth='xs' className={classes.logoContainer}>
          <Grid item>
            <Typography
              variant='h6'
              className={classes.logo}
              component='div'
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
        {matches && (
          <Grid container className={classes.listItemContainer} spacing={3}>
            <ListItem text='program' drawer={drawer} />
            <ListItem text='about' drawer={drawer} />
            <ListItem text='tickets' drawer={drawer} />
            <ListItem text='contact' drawer={drawer} />
          </Grid>
        )}
        <div className={classes.loginHamburgerWrapper}>
          <NavUser drawer={drawer} />
          {!matches && (
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
