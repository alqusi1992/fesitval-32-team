import React from "react";
import { Button, Grid } from "@mui/material";

const DrawerListButton = ({ text }) => {
  return (
    <Grid item>
      <Button style={{ color: "white" }}>{text}</Button>
    </Grid>
  );
};

export default DrawerListButton;
