import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '..';
import { ListWrapper, ListItem } from './FooterStyles';

const FooterList = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <ListWrapper>
        <ListItem onClick={() => setIsRegister(true)}>Log in</ListItem>
        <Link >
          <ListItem>Program</ListItem>
        </Link>
          <Link to='/tickets'>
            <ListItem>Tickets</ListItem>
          </Link>
        <Link>
          <ListItem>About</ListItem>
        </Link>
        <Link>
          <ListItem>Contact</ListItem>
        </Link>
      </ListWrapper>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );
};

export default FooterList;
