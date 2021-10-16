import { Grid, List } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';
import DrawerListButton from './DrawerListButton';
import { useStyles } from './NavStyles';

export const NavDrawer = ({ drawer, handleDrawer }) => {
  const classes = useStyles({ drawer });
  const history = useHistory();
  const handleClick = (clickFunction) => {
    handleDrawer();
    clickFunction();
  };
  const list = () => (
    <>
      <Box className={classes.drawerContainer}>
        <List>
          <Grid container className={classes.drawerDropDownOuter}>
            <Grid container className={classes.drawerDropDown}>
              <DrawerListButton
                text='program'
                handleClick={() => handleClick(() => history.push('/schedule'))}
              />
              <DrawerListButton
                text='tickets'
                handleClick={() => handleClick(() => history.push('/tickets'))}
              />
              <DrawerListButton
                text='about us'
                handleClick={() => handleClick(() => history.push('/about'))}
              />
              <DrawerListButton
                text='contact'
                handleClick={() => handleClick(() => history.push('/schedule'))}
              />
            </Grid>
          </Grid>
        </List>
      </Box>
    </>
  );

  return <>{list()}</>;
};
