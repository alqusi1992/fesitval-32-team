import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const Container = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CardsHolder = styled(Carousel)`
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;
  display: flex;
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.71);
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ImageTextHolder = styled.div`
  width: 384px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
`;
export const ImagText = styled.h2`
  margin: 10px 0;
  font-size: 36px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(5px);
  }
`;
export const Button = styled.button`
  align-self: flex-start;
  padding: 15px 20px;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  font-weight: bold;
  background-color: #610527;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #92083b;
    transform: scale(1.1);
  }
`;

export const ListItem = styled.div`
  width: 100%;
`;
