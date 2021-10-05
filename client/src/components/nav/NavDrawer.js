import React, { useState } from "react";
import { Button, Drawer, Grid, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { useStyles } from "./NavStyles";

export const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawer(open);
  };
  const classes = useStyles(drawer);

  const list = () => (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.drawerContainer}
    >
      <List>
        <div>
          <Grid container>
            <Grid item>
              <Button>login</Button>
            </Grid>
            <Grid item>
              <Button>program</Button>
            </Grid>
            <Grid item>
              <Button>tickets</Button>
            </Grid>
            <Grid item>
              <Button>about</Button>
            </Grid>
            <Grid item>
              <Button>contact</Button>
            </Grid>
          </Grid>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"top"} open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};
