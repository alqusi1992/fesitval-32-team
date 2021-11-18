import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useValue } from '../../../context/globalContext';
import { logout, setUser } from '../../../actions/userActions';
import User from '../../user/User';
import { Button } from '@mui/material/';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import decode from 'jwt-decode';
import { useStyles } from './NavUserStyles';
import NavItem from './NavItem';

const NavUser = ({ drawer, setDrawer }) => {
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
    setDrawer(false);
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
      <NavItem
        open={open}
        handleMenu={handleMenu}
        handleLogout={handleLogout}
        handleClose={handleClose}
        history={history}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default NavUser;
