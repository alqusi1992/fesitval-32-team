import React, { useState } from "react";
import { Button, Drawer, Grid, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { useStyles } from "./NavStyles";
import DrawerListButton from "./DrawerListButton";

export const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  const classes = useStyles({ drawer });

  const list = () => (
    <Box className={classes.drawerContainer}>
      <List>
        <div>
          <Grid container>
            <DrawerListButton text="login" />
            <DrawerListButton text="program" />
            <DrawerListButton text="tickets" />
            <DrawerListButton text="about" />
            <DrawerListButton text="contact" />
          </Grid>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={() => handleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      {list()}
    </>
  );
};
