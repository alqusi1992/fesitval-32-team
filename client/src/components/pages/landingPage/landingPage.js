import React, { useEffect } from 'react';
import { CardsHolder, ListItem } from './landingPageStyle';
import about from '../../../images/about.jpg';
import program from '../../../images/program.jpg';
import tickets from '../../../images/tickets.jpg';
import ImageCard from './ImageCard';
import { Link, useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useValue } from '../../../context/globalContext';
import { showAlert } from '../../../actions/alertActions';
import Alert from '../../alert/Alert';

const LandingPage = () => {
  const {
    dispatch,
    state: { alert },
  } = useValue();

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

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const verified = useQuery().get('isVerified');
  const tokenExpired = useQuery().get('tokenExpired');

  useEffect(() => {
    if (verified === null) {
      return;
    } else if (verified === 'true') {
      showAlert('success', 'your email is successfully verified', dispatch);
    } else if (tokenExpired === 'true') {
      showAlert(
        'danger',
        'Link is expired, please request a new link',
        dispatch,
      );
    } else {
      showAlert('danger', 'Verification is failed', dispatch);
    }
  }, [dispatch, verified, tokenExpired]);

  return (
    <>
      {alert.isAlert && verified ? <Alert /> : ''}
      <CardsHolder
        responsive={responsive}
        partialVisible={true}
        itemClass='image-item'
      >
        <ListItem>
          <Link to='/about'>
            <ImageCard
              {...{ img: about, title: 'ABOUT', buttonTitle: 'ABOUT' }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/schedule'>
            <ImageCard
              {...{ img: program, title: 'PROGRAM', buttonTitle: 'PROGRAM' }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/tickets'>
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
