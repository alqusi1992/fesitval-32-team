import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: red;
  height: 82px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  background-color: white;
  & img {
    width: 250px;
    background-color: green;
    margin: 0;
    cursor: pointer;
  }
  & div {
    display: flex;
    justify-content: center;
    & p {
      flex: 1;
      background-color: pink;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: 400px;
  }
`;
export const NavListContainer = styled.div``;
export const HamburgerContainer = styled.div`
  width: 50px;
  background-color: green;
`;
