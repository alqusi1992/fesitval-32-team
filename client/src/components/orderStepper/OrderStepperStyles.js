export const classes = {
  stepper: { width: '100%', minHeight: '550px' },
  stepContainer: {
    padding: {
      xs: '0px',
      s: '5px',
      md: '0px',
    },
  },
  ctaBar: {
    backgroundColor: '#610527',
    color: '#dfdfdf',
    padding: '10px 5px',
    width: '100%',
    position: 'sticky',
    bottom: '0',
  },
  btn: {
    backgroundColor: '#dfdfdf',
    color: '#610527',
    borderRadius: '20px',
    padding: '6px 10px',
    '&:hover': { backgroundColor: '#dfdfdfc2' },
  },
  payBtn: {
    backgroundColor: '#dfdfdf',
    color: '#610527',
    borderRadius: '20px',
    padding: '6px 10px',
    '&:hover': { backgroundColor: '#dfdfdfc2' },
    '&.Mui-disabled': {
      backgroundColor: '#dfdfdf',
    },
  },
  total: {
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
  },
};
