import React from 'react';
import { IconButton, Menu, MenuItem, Avatar, ListItemIcon, Divider, Tooltip } from '@mui/material/';
import Logout from '@mui/icons-material/Logout';
import { useValue } from '../../../context/globalContext';

const NavItem = ({ open, handleMenu, handleLogout, history, handleClose, anchorEl }) => {
  const {
    state: { user },
  } = useValue();
  return (
    <div>
      <Tooltip title='Account settings'>
        <IconButton onClick={handleMenu} size='large' sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {user?.result?.firstName?.charAt(0)?.toUpperCase() ||
              user?.result?.givenName?.charAt(0)?.toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => history.push('/account')}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavItem;
