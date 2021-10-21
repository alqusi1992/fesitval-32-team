import React from 'react';

import {
  CardHeader,
  CardHolder,
  CardParagraph,
  Header,
  Image,
  Button,
  Description,
} from './aboutStyles';

const About = () => {
  return (
    <>
      <Header>hello form about</Header>
      <Description>
        Veniam quis anim in sint eiusmod adipisicing ullamco excepteur fugiat
        dolor ad tempor.
      </Description>
      <Image src='https://s3.eu-west-1.amazonaws.com/museumnacht.amsterdam/thumbs/1280x_5d8b3edd811e5be036854cda55768c6b57e2896479001.jpg' />

      <CardHolder>
        <CardHeader>bla bla</CardHeader>
        <CardParagraph>
          Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse
          aliqua commodo est commodo laborum eiusmod. Non ipsum ipsum officia
          velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud
          dolore officia aute voluptate labore est culpa. Pariatur ullamco
          tempor aliquip deserunt id laborum labore et.
        </CardParagraph>
        <Button>click me</Button>
      </CardHolder>

      <CardHolder>
        <CardHeader>bla bla</CardHeader>
        <CardParagraph>
          Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse
          aliqua commodo est commodo laborum eiusmod. Non ipsum ipsum officia
          velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud
          dolore officia aute voluptate labore est culpa. Pariatur ullamco
          tempor aliquip deserunt id laborum labore et.
        </CardParagraph>
        <Button>click me</Button>
      </CardHolder>

      <CardHolder>
        <CardHeader>bla bla</CardHeader>
        <CardParagraph>
          Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse
          aliqua commodo est commodo laborum eiusmod. Non ipsum ipsum officia
          velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud
          dolore officia aute voluptate labore est culpa. Pariatur ullamco
          tempor aliquip deserunt id laborum labore et.
        </CardParagraph>
        <Button>click me</Button>
      </CardHolder>

      <CardHolder>
        <CardHeader>bla bla</CardHeader>
        <CardParagraph>
          Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse
          aliqua commodo est commodo laborum eiusmod. Non ipsum ipsum officia
          velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud
          dolore officia aute voluptate labore est culpa. Pariatur ullamco
          tempor aliquip deserunt id laborum labore et.
        </CardParagraph>
        <Button>click me</Button>
      </CardHolder>
    </>
  );
};

export default About;
