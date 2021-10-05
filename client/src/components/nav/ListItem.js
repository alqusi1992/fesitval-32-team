import { Button, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./NavStyles";

export const ListItem = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Button className={classes.listItemBtn}>{text}</Button>
    </Grid>
  );
};
