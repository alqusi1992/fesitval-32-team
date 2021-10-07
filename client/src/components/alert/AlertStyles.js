import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  alert: {
    maxWidth: '1170px',
    position: 'relative',
    padding: '0.75rem 1.25rem',
    marginBottom: '1rem',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    margin: '1rem auto',
    textAlign: 'center',
  },
  success: {
    color: '#155724',
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  danger: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  alertCancel: {
    position: 'absolute',
    right: '0',
    top: '0',
    cursor: 'pointer',
  },
});
