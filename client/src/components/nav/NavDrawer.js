import { useState } from "react";
import { Grid, List } from "@mui/material";

import { Box } from "@mui/system";
import { useStyles } from "./NavStyles";
import Register from "../user/register/Register";
import DrawerListButton from "./DrawerListButton";

export const NavDrawer = ({ drawer }) => {
  const [isRegister, setIsRegister] = useState(false);

  const classes = useStyles({ drawer });
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton text="login" {...{ setIsRegister }} />
              <DrawerListButton text="program" />
              <DrawerListButton text="tickets" />
              <DrawerListButton text="about" />
              <DrawerListButton
                onClick={() => setIsRegister(true)}
                text="contact"
              />
            </Grid>
          </Grid>
        </List>
      </Box>
      {isRegister && <Register setIsRegister={setIsRegister} />}
    </>
  );

  return <>{list()}</>;
};
