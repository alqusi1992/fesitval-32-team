import { Grid, List } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import DrawerListButton from './DrawerListButton';
import { useStyles } from './NavStyles';
import { useHistory } from 'react-router-dom';

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
              <div className={classes.closeDrawer}>
                <CloseIcon
                  fontSize='large'
                  className={classes.closeIcon}
                  onClick={() => handleDrawer()}
                />
              </div>
              <DrawerListButton
                text='program'
                handleClick={() => handleClick(() => history.push('/program'))}
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
                handleClick={() => handleClick(() => history.push('/contact'))}
              />
            </Grid>
          </Grid>
        </List>
      </Box>
    </>
  );

  return <>{list()}</>;
};
