import { useState } from 'react';
import { Grid, List } from '@mui/material';
import User from '../user/User';
import { Box } from '@mui/system';
import { useStyles } from './NavStyles';
import DrawerListButton from './DrawerListButton';

export const NavDrawer = ({ drawer }) => {
  const [isRegister, setIsRegister] = useState(false);
  const classes = useStyles({ drawer });
  // const handleRegister = () => {
  //   setIsRegister(true);
  // };
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton
                text='login'
                handleClick={() => setIsRegister(true)}
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
