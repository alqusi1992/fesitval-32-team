import React from 'react';
import { Button, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './NavStyles';

const DrawerListButton = ({ text, handleClick }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.drawerDropDownInner}
      onClick={handleClick}
    >
      <Grid item>
        <Button className={classes.listBtn}>{text}</Button>
      </Grid>
      <Grid item>
        <ArrowForwardIosIcon color='secondary' />
      </Grid>
    </Grid>
  );
};

export default DrawerListButton;
