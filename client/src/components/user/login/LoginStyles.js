import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  FormGroup: {
    textTransform: 'capitalize',
  },
  FormLabel: {
    display: 'block',
    letterSpacing: 'var(--mainSpacing)',
    marginBottom: '0.5rem',
  },
  InputControl: {
    width: '100%',
    background: 'transparent',
    fontSize: '1rem',
    padding: '10px 5px',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  FieldsContainer: {
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(202px, 1fr))',
    gridRowGap: '2rem',
    gridColumnGap: '40px',
  },
  BtnContainer: {
    textAlign: 'center',
    marginTop: '20px',
    '&:hover': {
      background: 'transparent',
      color: '#222',
    },
  },
  ButtonPrimary: {
    display: 'inline-block',
    textDecoration: 'none',
    letterSpacing: '3px',
    color: '#ccc',
    background: '#222',
    border: '3px solid #222',
    transition: 'all 0.3s linear',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '1.1rem 1.3rem 1.2rem',
    borderRadius: '25px',
  },
});
