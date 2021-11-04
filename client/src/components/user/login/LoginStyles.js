export const classes = {
  btn: {
    width: '100px',
    backgroundColor: '#610527',
    color: '#ddd',
    borderRadius: '20px',
    padding: '7px 20px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#92083b', transform: 'scale(1.1)' },
  },
  btnContainer: {
    textAlign: 'center',
    margin: '20px',
  },
  fieldsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(202px, 1fr))',
    gridRowGap: '2rem',
    gridColumnGap: '40px',
  },
  inputAdornment: {
    position: 'absolute',
    right: '0',
    top: '30px',
  },
  rememberMe: {
    color: '#828282',
    marginTop: '5px',
  },
};
