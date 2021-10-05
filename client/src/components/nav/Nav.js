import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  AppBar,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ListItem } from "./ListItem";
import { useStyles } from "./NavStyles";
import { NavDrawer } from "./NavDrawer";

const Nav = () => {
  const matches = useMediaQuery("(min-width:768px)");

  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              maxWidth="xs"
              className={classes.logoContainer}
              // spacing={2}
            >
              <Grid item>
                <Typography
                  className={classes.logo}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  HackYourFestival
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.navDate}>
                  <Typography
                    className={classes.dateText}
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    4th october 2021 11:00-23:00
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {matches && (
              <Grid container className={classes.listItemContainer} spacing={2}>
                <ListItem text="program" />
                <ListItem text="about" />
                <ListItem text="tickets" />
              </Grid>
            )}
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
          </Toolbar>
        </AppBar>
      </Box>
      <NavDrawer {...{ drawer }} />
    </>
  );
};

export default Nav;
