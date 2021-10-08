import React from 'react';
import {
  Button,
  Card,
  ImageHolder,
  ImageTextHolder,
  ImagText,
  Img,
} from './landingPageStyle';

const ImageCard = ({ img, title, buttonTitle }) => {
  return (
    <Card>
      <ImageHolder>
        <Img src={img} />
        <ImageTextHolder>
          <ImagText>{title}</ImagText>
          <Button>{buttonTitle}</Button>
        </ImageTextHolder>
      </ImageHolder>
    </Card>
  );
};

export default ImageCard;
