import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { NavBar } from './NavBar';

const Nav = () => {
  const matches = useMediaQuery('(min-width:768px)');
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <NavBar {...{ handleDrawer, matches, drawer, setDrawer }} />
    </>
  );
};

export default Nav;
