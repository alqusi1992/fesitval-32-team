import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  title: {
    textAlign: 'center',
  },
  collapse: {
    cursor: 'pointer',
  },
  clock: {
    width: 'auto',
  },
  tableHead: {
    fontSize: '1.5rem !important',
    textTransform: 'uppercase',
  },
  genre: {
    fontSize: '1.3rem !important',
  },
});
