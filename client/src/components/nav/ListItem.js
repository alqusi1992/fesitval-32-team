import { Button, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './NavStyles';

export const ListItem = ({ label, drawer }) => {
  const classes = useStyles({ drawer });
  return (
    <Grid item alignItems='center' className={classes.listItemWrapper}>
      <NavLink to={`/${label}`} activeClassName={classes.selected}>
        <Button className={classes.listItemBtn}>{label}</Button>
      </NavLink>
    </Grid>
  );
};
