import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { NavBar } from './NavBar';

const Nav = () => {
  const isMatch = useMediaQuery('(min-width:832px)');
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <NavBar
      handleDrawer={handleDrawer}
      isMatch={isMatch}
      drawer={drawer}
      setDrawer={setDrawer}
    />
  );
};

export default Nav;
