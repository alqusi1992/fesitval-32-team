import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CardsHolder = styled.div`
  width: 80%;
  height: 590px;
  margin-top: 20px auto;
  border-radius: 10px;
  display: flex;
  background-color: pink;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slide}px);
`;
export const Card = styled.div`
  width: 384px;
  height: 580px;
  margin: 10px;
  border-radius: 10px;
  background-color: yellow;
  overflow: hidden;
`;
export const Slider = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out;

  &: hover {
    transform: scale(1.1);
  }
`;

export const ImageHolder = styled.div`
  width: 384px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: green;
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

  &: hover {
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

  &: hover {
    background-color: #92083b;
    transform: scale(1.1);
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: black;
  margin-top: 50px;
`;
