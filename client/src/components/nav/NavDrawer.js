import React from "react";
import { Grid, List } from "@mui/material";

import { Box } from "@mui/system";
import { useStyles } from "./NavStyles";
import DrawerListButton from "./DrawerListButton";

export const NavDrawer = ({ drawer }) => {
  const classes = useStyles({ drawer });
  const list = () => (
    <Box className={classes.drawerContainer}>
      <List>
        <Grid container className={classes.drawerDropDownOuter}>
          <Grid container className={classes.drawerDropDown}>
            <DrawerListButton text="login" />
            <DrawerListButton text="program" />
            <DrawerListButton text="tickets" />
            <DrawerListButton text="about" />
            <DrawerListButton text="contact" />
          </Grid>
        </Grid>
      </List>
    </Box>
  );

  return <>{list()}</>;
};
