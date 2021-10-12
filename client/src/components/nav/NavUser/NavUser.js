import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem, Button } from '@mui/material/';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import { useStyles } from './NavUserStyles';
import { useValue } from '../../../context/globalContext';
import { logout, setUser } from '../../../actions/userActions';
import User from '../../user/User';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalStorage } from '../../../utils/localStorage';
import decode from 'jwt-decode';

const NavUser = () => {
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const {
    state: { user },
    dispatch,
  } = useValue();

  useEffect(() => {
    if (!user?.token) {
      const userProfile = getLocalStorage('profile');
      if (userProfile?.token) {
        setUser(userProfile, dispatch);
      }
    }
  }, [user, dispatch]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  if (user?.token) {
    if (!auth) {
      setAuth(true);
    }
    const decodedToken = decode(user.token);
    if (decodedToken.exp * 1000 < new Date().getTime()) logout(dispatch);
  }

  const handleLogout = () => {
    handleClose();
    logout(dispatch);
    setAuth(false);
    history.push('/');
  };
  const handleLogin = () => {
    handleClose();
    setIsRegister(true);
  };
  if (!auth) {
    return (
      <>
        <Button
          onClick={handleLogin}
          className={classes.listItemBtn}
          startIcon={<LockIcon />}
        >
          Login
        </Button>
        {isRegister && <User setIsRegister={setIsRegister} />}
      </>
    );
  }

  return (
    <div>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
      >
        <AccountCircle style={{ fontSize: '35px' }} />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/profile' style={{ color: '#000' }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to='/account' style={{ color: '#000' }}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          <span style={{ marginLeft: '5px' }}>Logout</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavUser;
