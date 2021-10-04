import React from "react";
import { Link } from "react-router-dom";
import { HamburgerContainer, LogoHolder, Wrapper } from "./NavStyles";

const Nav = () => {
  return (
    <Wrapper>
      <LogoHolder>
        <Link to="/home">
          <img src="#" alt="logo" />
        </Link>
        <div>
          <p>4th october 2021 11:00-23:00</p>
        </div>
      </LogoHolder>
      <HamburgerContainer></HamburgerContainer>
    </Wrapper>
  );
};

export default Nav;
