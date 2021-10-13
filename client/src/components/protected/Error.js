import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useHistory } from 'react-router';
const Error = ({ message }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <Container maxWidth='sm' style={{ marginTop: '100px' }}>
      <Alert
        variant='outlined'
        severity='error'
        style={{
          justifyContent: 'center',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <AlertTitle style={{ marginBottom: '30px' }}>{message}</AlertTitle>
        <Button variant='outlined' startIcon={<Home />} onClick={handleClick}>
          Back Home
        </Button>
      </Alert>
    </Container>
  );
};

export default Error;
