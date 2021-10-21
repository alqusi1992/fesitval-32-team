import styled from 'styled-components';

export const Header = styled.h2`
  width: 100%;
  font-size: 2.77778em;
  text-align: center;
`;
export const Description = styled.h5`
  font-size: 1.3333em;
  max-width: 1440px;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin: 0 auto;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  @media only screen and (min-width: 1024px) {
    width: 90%;
    display: block;
    margin: 30px auto;
  } ;
`;

export const CardHolder = styled.div`
  width: 100%;
  margin-bottom: 30px;
  background-color: #f0f0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  @media only screen and (min-width: 1024px) {
    width: 80%;
    margin: 30px auto;
  } ;
`;

export const CardHeader = styled.h3`
  width: 80%;
  text-align: center;
`;

export const CardParagraph = styled.p`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 20px;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  font-weight: bold;
  background-color: black;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
