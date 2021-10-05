import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  AppBar,
  useMediaQuery,
} from "@mui/material";

import { ListItem } from "./ListItem";
import { useStyles } from "./NavStyles";
import { NavDrawer } from "./NavDrawer";

const Nav = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            maxWidth="xs"
            className={classes.logoContainer}
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HackYourFestival
              </Typography>
            </Grid>
            <Grid item className={classes.navDate}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                4th october 2021 11:00-23:00
              </Typography>
            </Grid>
          </Grid>
          {matches && (
            <Grid container className={classes.listItemContainer} spacing={2}>
              <ListItem text="program" />
              <ListItem text="about" />
              <ListItem text="tickets" />
            </Grid>
          )}
          <NavDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
