import React from 'react';
import { Wrapper } from './NavStyles';
import { User } from '../../components';
import { useState, useEffect } from 'react';
import { useValue } from '../../context/globalContext';

const Nav = () => {
  const [isRegister, setIsRegister] = useState(false);

  // testing the state after creating the user account
  const { state } = useValue();
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Wrapper>
        <div>nav</div>
        <button onClick={() => setIsRegister(true)}>Register</button>
      </Wrapper>
      {isRegister && <User setIsRegister={setIsRegister} />}
    </>
  );
};

export default Nav;
