import { Button, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './NavStyles';

export const ListItem = ({ text, drawer }) => {
  const classes = useStyles({ drawer });
  return (
    <Grid item alignItems='center'>
      <Button
        className={classes.listItemBtn}
        color={drawer ? 'secondary' : 'primary'}
      >
        {text}
      </Button>
    </Grid>
  );
};
