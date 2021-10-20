import {
  IconButton,
  Menu,
  MenuItem,
  Button,
  Avatar,
  ListItemIcon,
  Divider,
  Tooltip,
} from '@mui/material/';
import { useState } from 'react';
import Logout from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import { useValue } from '../../../context/globalContext';
import { logout, setUser } from '../../../actions/userActions';
import User from '../../user/User';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import decode from 'jwt-decode';
import { useStyles } from './NavUserStyles';

const NavUser = ({ drawer }) => {
  const history = useHistory();
  const classes = useStyles({ drawer });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isRegister, setIsRegister] = useState(false);
  const {
    state: { user },
    dispatch,
  } = useValue();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const verified = useQuery().get('isVerified');

  useEffect(() => {
    if (!user?.token) {
      const userProfile = getLocalStorage('profile');
      if (userProfile?.token) {
        if (verified === 'true') {
          userProfile.result.isVerified = true;
          setLocalStorage('profile', userProfile);
        }
        setUser(userProfile, dispatch);
      }
    }
  }, [user, dispatch, verified]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  if (user?.token) {
    const decodedToken = decode(user.token);
    if (decodedToken.exp * 1000 < new Date().getTime()) logout(dispatch);
  }

  const handleLogout = () => {
    logout(dispatch);
    history.push('/');
  };
  const handleLogin = () => {
    handleClose();
    setIsRegister(true);
  };
  if (!user?.token) {
    return (
      <>
        <Button onClick={handleLogin} className={classes.listItemBtn} startIcon={<LockIcon />}>
          Login
        </Button>
        {isRegister && <User setIsRegister={setIsRegister} />}
      </>
    );
  }

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

export default NavUser;
