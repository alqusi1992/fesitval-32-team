import React from "react";
import { useStyles } from "./NavStyles";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem } from "./ListItem";
import { useTheme } from "@mui/material/styles";

export const NavBar = ({ drawer, handleDrawer, matches }) => {
  const theme = useTheme();
  const classes = useStyles({ drawer });
  return (
    <AppBar
      position="static"
      className={drawer ? classes.appBarBlack : classes.appBarWhite}
    >
      <Toolbar className={classes.toolBar}>
        <Grid container maxWidth="xs" className={classes.logoContainer}>
          <Grid item>
            <Typography
              color={
                drawer
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main
              }
              variant="h6"
              className={classes.logo}
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
            <ListItem text="program" drawer={drawer} />
            <ListItem text="about" drawer={drawer} />
            <ListItem text="tickets" drawer={drawer} />
          </Grid>
        )}
        <IconButton
          className={classes.iconBtn}
          onClick={() => handleDrawer(true)}
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon color={drawer ? "secondary" : "primary"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
