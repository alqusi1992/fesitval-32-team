import { useValue } from '../../context/globalContext';
import Error from './Error';
const Protected = ({ children }) => {
  const {
    state: { user },
  } = useValue();

  if (user?.token) return children;

  return <Error message='Access Not Allowed! Login to access this page' />;
};

export default Protected;
