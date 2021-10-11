import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const iconsStyles = makeStyles({
  facebookIcon: {
    cursor: 'pointer',
    '&:hover': { color: '#1877F2', transform: 'translateX(1px)' },
  },
  instagramIcon: {
    cursor: 'pointer',
    '&:hover': { color: '#E4405F', transform: 'translateX(1px)' },
  },
  youTubeIcon: {
    cursor: 'pointer',
    '&:hover': { color: '#CD201F', transform: 'translateX(1px)' },
  },
});

export const FooterWrapper = styled.footer`
  position: absolute;
  background-color: black;
  width: 100%;
  min-height: 200px;
  bottom: 0;
  color: #fff;
  margin-top: auto;
  padding-top: 10px;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding-left: 20px;
  margin-left: 10px;
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 0%;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #610527;
  }
`;

export const ListItem = styled.li`
  width: fit-content;
  text-decoration: none;
  color: #fff;
  transition: transform 0.3s;
  padding: 5px;
  cursor: pointer;
  &:hover {
    transform: translateX(4px);
    background-color: transparent;
  }
`;
