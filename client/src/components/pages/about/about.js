import React, { useState, useEffect } from 'react';
import { CardHeader, CardHolder, CardParagraph, Header, Image, Button, Description, ImageDivision } from './aboutStyles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
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
         <Header>hello form about</Header>
         <Description>Veniam quis anim in sint eiusmod adipisicing ullamco excepteur fugiat dolor ad tempor.</Description>
         <ImageDivision>
            {loading ? (
               <Image src="https://s3.eu-west-1.amazonaws.com/museumnacht.amsterdam/thumbs/1280x_5d8b3edd811e5be036854cda55768c6b57e2896479001.jpg" />
            ) : (
               <Box sx={{ display: 'flex', position: 'relative', marginTop: '2%' }}>
                  <CircularProgress variant="determinate" value={progress} thickness={2} size={150} />

                  <Typography
                     variant="caption"
                     component="div"
                     color="text.secondary"
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
         </ImageDivision>
         <CardHolder>
            <CardHeader>Section 1</CardHeader>
            <CardParagraph>
               Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo est commodo laborum eiusmod. Non ipsum
               ipsum officia velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud dolore officia aute voluptate labore est
               culpa. Pariatur ullamco tempor aliquip deserunt id laborum labore et.
            </CardParagraph>
            <Button>click me</Button>
         </CardHolder>
         <CardHolder>
            <CardHeader>Section 2</CardHeader>
            <CardParagraph>
               Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo est commodo laborum eiusmod. Non ipsum
               ipsum officia velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud dolore officia aute voluptate labore est
               culpa. Pariatur ullamco tempor aliquip deserunt id laborum labore et.
            </CardParagraph>
            <Button>click me</Button>
         </CardHolder>
         <CardHolder>
            <CardHeader>Section 3</CardHeader>
            <CardParagraph>
               Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo est commodo laborum eiusmod. Non ipsum
               ipsum officia velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud dolore officia aute voluptate labore est
               culpa. Pariatur ullamco tempor aliquip deserunt id laborum labore et.
            </CardParagraph>
            <Button>click me</Button>
         </CardHolder>
         <CardHolder>
            <CardHeader>Section 4</CardHeader>
            <CardParagraph>
               Anim cupidatat sunt labore eiusmod ullamco dolore cillum in. Amet esse aliqua commodo est commodo laborum eiusmod. Non ipsum
               ipsum officia velit occaecat nulla tempor aute id exercitation. Aute ex est nostrud dolore officia aute voluptate labore est
               culpa. Pariatur ullamco tempor aliquip deserunt id laborum labore et.
            </CardParagraph>
            <Button>click me</Button>
         </CardHolder>
      </>
   );
};

export default About;
