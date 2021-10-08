import React from 'react';
import { CardsHolder, ListItem } from './landingPageStyle';
import about from '../../../images/about.jpg';
import program from '../../../images/program.jpg';
import tickets from '../../../images/tickets.jpg';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';

const LandingPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <>
      <CardsHolder
        responsive={responsive}
        partialVisible={true}
        itemClass='image-item'
      >
        <ListItem>
          <Link to='/home'>
            <ImageCard
              {...{ img: about, title: 'ABOUT', buttonTitle: 'ABOUT' }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ImageCard
              {...{ img: program, title: 'PROGRAM', buttonTitle: 'PROGRAM' }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ImageCard
              {...{ img: tickets, title: 'TICKETS', buttonTitle: 'TICKETS' }}
            />
          </Link>
        </ListItem>
      </CardsHolder>
    </>
  );
};

export default LandingPage;
