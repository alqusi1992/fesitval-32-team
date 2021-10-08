import { useState } from 'react';
import { Grid, List } from '@mui/material';
import User from '../user/User';
import { Box } from '@mui/system';
import { useStyles } from './NavStyles';
import DrawerListButton from './DrawerListButton';

export const NavDrawer = ({ drawer }) => {
  const [isRegister, setIsRegister] = useState(false);
  const classes = useStyles({ drawer });
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton text='login' {...{ setIsRegister }} />
              <DrawerListButton text='program' />
              <DrawerListButton text='tickets' />
              <DrawerListButton text='about' />
              <DrawerListButton text='contact' />
            </Grid>
          </Grid>
        </List>
      </Box>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );

  return <>{list()}</>;
};
