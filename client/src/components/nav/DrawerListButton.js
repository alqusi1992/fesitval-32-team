import React from "react";
import { Button, Grid } from "@mui/material";
import { useStyles } from "./NavStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DrawerListButton = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.drawerDropDownInner}>
      <Grid item>
        <Button className={classes.listBtn}>{text}</Button>
      </Grid>
      <Grid item>
        <ArrowForwardIosIcon color="secondary" />
      </Grid>
    </Grid>
  );
};

export default DrawerListButton;
