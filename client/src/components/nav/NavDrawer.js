import { Grid, List } from '@mui/material';
import { Box } from '@mui/system';
import DrawerListButton from './DrawerListButton';
import { useStyles } from './NavStyles';
import { useHistory } from 'react-router-dom';

export const NavDrawer = ({ drawer, setDrawer }) => {
  const history = useHistory();
  const classes = useStyles({ drawer });
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton
                text='program'
                handleClick={() => {
                  history.push('/program');
                  setDrawer(false);
                }}
              />
              <DrawerListButton
                text='tickets'
                handleClick={() => {
                  history.push('/tickets');
                  setDrawer(false);
                }}
              />
              <DrawerListButton
                text='about'
                handleClick={() => {
                  history.push('/about');
                  setDrawer(false);
                }}
              />
              <DrawerListButton
                text='contact'
                handleClick={() => {
                  history.push('/contact');
                  setDrawer(false);
                }}
              />
            </Grid>
          </Grid>
        </List>
      </Box>
    </>
  );

  return <>{list()}</>;
};
