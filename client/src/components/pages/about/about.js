import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { classes } from './aboutStyles';

import Typography from '@mui/material/Typography';
import useScrollToTop from '../../../utils/useScrollToTop';

const About = () => {
   useScrollToTop();
   const [progress, setProgress] = useState(10);
   const [loading, setLoading] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => (prevProgress >= 60 ? setLoading(true) : prevProgress + 10));
      }
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [progress, loading]);

  return (
    <>
      <Grid sx={classes.header}>hello form about</Grid>
      <Grid sx={classes.description}>
        Veniam quis anim in sint eiusmod adipisicing ullamco excepteur fugiat dolor ad tempor.
      </Grid>
      <Grid container sx={classes.imageDivision}>
        {loading ? (
          <Grid>
            <img
              width='100%'
              src='https://s3.eu-west-1.amazonaws.com/museumnacht.amsterdam/thumbs/1280x_5d8b3edd811e5be036854cda55768c6b57e2896479001.jpg'
              alt='s'
            />
          </Grid>
        ) : (
          <Box sx={{ display: 'flex', position: 'relative', marginTop: '2%' }}>
            <CircularProgress variant='determinate' value={progress} thickness={2} size={150} />

            <Typography
              component='div'
              color='text.secondary'
              variant={'h5'}
              sx={{
                position: 'absolute',
                top: { xs: '20%', md: '10%', sm: '15%', lg: '7%', xl: '5%' },
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        )}{' '}
      </Grid>
      <Grid container sx={classes.cardContainer}>
        <Grid sx={classes.cardHolder}>
          <Grid sx={classes.cardHeader}>Section 1</Grid>
          <Grid sx={classes.cardParagraph}>
            Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo
            est commodo laborum eiusmod. Non ipsum ipsum officia velit occaecat nulla tempor aute id
            exercitation. Aute ex est nostrud dolore officia aute voluptate labore est culpa.
            Pariatur ullamco tempor aliquip deserunt id laborum labore et.
          </Grid>
        </Grid>
        <Grid sx={classes.cardHolder}>
          <Grid sx={classes.cardHeader}>Section 2</Grid>
          <Grid sx={classes.cardParagraph}>
            Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo
            est commodo laborum eiusmod. Non ipsum ipsum officia velit occaecat nulla tempor aute id
            exercitation. Aute ex est nostrud dolore officia aute voluptate labore est culpa.
            Pariatur ullamco tempor aliquip deserunt id laborum labore et.
          </Grid>
        </Grid>
        <Grid sx={classes.cardHolder}>
          <Grid sx={classes.cardHeader}>Section 3</Grid>
          <Grid sx={classes.cardParagraph}>
            Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo
            est commodo laborum eiusmod. Non ipsum ipsum officia velit occaecat nulla tempor aute id
            exercitation. Aute ex est nostrud dolore officia aute voluptate labore est culpa.
            Pariatur ullamco tempor aliquip deserunt id laborum labore et.
          </Grid>
        </Grid>
        <Grid sx={classes.cardHolder}>
          <Grid sx={classes.cardHeader}>Section 4</Grid>
          <Grid sx={classes.cardParagraph}>
            Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo
            est commodo laborum eiusmod. Non ipsum ipsum officia velit occaecat nulla tempor aute id
            exercitation. Aute ex est nostrud dolore officia aute voluptate labore est culpa.
            Pariatur ullamco tempor aliquip deserunt id laborum labore et.
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
