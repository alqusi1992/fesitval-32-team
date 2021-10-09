import { useState } from 'react';
import { Grid, List } from '@mui/material';
import User from '../user/User';
import { Box } from '@mui/system';
import DrawerListButton from './DrawerListButton';
import { useStyles } from './NavStyles';

export const NavDrawer = ({ drawer, setDrawer }) => {
  const [isRegister, setIsRegister] = useState(false);
  const classes = useStyles({ drawer });
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton
                text='login'
                handleClick={() => {
                  setDrawer(false);
                  setIsRegister(true);
                }}
              />
              <DrawerListButton text='program' handleClick={() => {}} />
              <DrawerListButton text='tickets' handleClick={() => {}} />
              <DrawerListButton text='about' handleClick={() => {}} />
              <DrawerListButton text='contact' handleClick={() => {}} />
            </Grid>
          </Grid>
        </List>
      </Box>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );

  return <>{list()}</>;
};
