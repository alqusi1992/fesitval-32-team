import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: absolute;
  background-color: black;
  width: 100%;
  min-height: 200px;
  bottom: 0;
  color: #fff;
  margin-top: auto;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`;

export const ListItem = styled.li`
  text-decoration: none;
  color: #fff;
  transition: transform 0.3s;
  padding: 5px;
  &:hover {
    transform: translateX(4px);
    background-color: transparent;
  }
`;
