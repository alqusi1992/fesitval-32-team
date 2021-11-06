export const classes = {
  header: {
    width: '100%',
    fontSize: '2.77778em',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.3333rem',
    maxWidth: '1440px',
    textAlign: 'center',
    '@media only screen and (min-width: 1024px)': {
      width: '70%',
      margin: '0 auto',
    },
  },
  cardContainer: {
    margin: '12rem auto',
  },
  imageDivision: {
    margin: '0 auto',
    width: '90vw',
    height: '90vw',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    '@media only screen and (min-width: 1024px)': {
      width: '90%',
    },
  },
  cardHolder: {
    width: '100%',
    marginBottom: '30px',
    backgroundColor: '#f0f0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20px',
    '@media only screen and (min-width: 1024px)': {
      width: '80%',
      margin: '30px auto',
    },
  },
  cardHeader: {
    width: '80%',
    textAlign: 'center',
  },
  cardParagraph: {
    width: '100%',
    padding: '10px 20px',
    textAlign: 'center',
  },
  progressStyle: {
    position: 'absolute',
    top: { xs: '20%', md: '10%', sm: '15%', lg: '7%', xl: '5%' },
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
