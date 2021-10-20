import React, { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Box, Divider, Drawer, Fab, List, Toolbar, Typography } from '@mui/material';
import AccountItem from './AccountItem';
import { useStyles } from './accountStyles';
import Profile from '../../Profile';
import UpdateAccount from '../updateAccount/UpdateAccount';
import DeleteAccount from '../DeleteAccount';

const MyAccount = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('Orders');
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <Divider />
      <List>
        <AccountItem
          icon={<ManageAccountsIcon />}
          text='Update'
          setValue={setValue}
          classes={classes}
        />
        <AccountItem icon={<DeleteIcon />} text='Delete' setValue={setValue} classes={classes} />
        <AccountItem
          icon={<FormatListBulletedIcon />}
          text='Orders'
          setValue={setValue}
          classes={classes}
        />
      </List>
      <Divider />
    </div>
  );
  return (
    <Box className={classes.box}>
      <AppBar
        className={classes.appBar}
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Fab
            size='medium'
            color='primary'
            aria-label='add'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, mt: 2, display: { sm: 'none' } }}
          >
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar className={classes.bottomToolbar}>
          <Typography variant='h4' component='h2' className={classes.accountTitle}>
            {value}
          </Typography>
        </Toolbar>
        <div className={classes.mainContainer}>
          {value === 'Orders' && <Profile />}
          {value === 'Delete' && <DeleteAccount />}
          {value === 'Update' && <UpdateAccount />}
        </div>
      </Box>
    </Box>
  );
};

export default MyAccount;
