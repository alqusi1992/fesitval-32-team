import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '..';
import { ListWrapper, ListItem } from './FooterStyles';

const FooterList = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <ListWrapper>
        <Link to='/schedule'>
          <ListItem>Program</ListItem>
        </Link>
        <Link to='/tickets'>
          <ListItem>Tickets</ListItem>
        </Link>
        <Link to='/about'>
          <ListItem>About</ListItem>
        </Link>
        <Link to='/schedule'>
          <ListItem>Contact</ListItem>
        </Link>
      </ListWrapper>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );
};

export default FooterList;
