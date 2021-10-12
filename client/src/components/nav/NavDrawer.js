import { Grid, List } from '@mui/material';
import { Box } from '@mui/system';
import DrawerListButton from './DrawerListButton';
import { useStyles } from './NavStyles';

export const NavDrawer = ({ drawer }) => {
  const classes = useStyles({ drawer });
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton text='program' handleClick={() => {}} />
              <DrawerListButton text='tickets' handleClick={() => {}} />
              <DrawerListButton text='about us' handleClick={() => {}} />
              <DrawerListButton text='contact' handleClick={() => {}} />
            </Grid>
          </Grid>
        </List>
      </Box>
    </>
  );

  return <>{list()}</>;
};
