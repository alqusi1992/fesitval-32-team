import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useValue } from '../../context/globalContext';

export default function SimpleBackdrop() {
  const {
    state: { isLoading },
  } = useValue();
  return (
    isLoading && (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      </div>
    )
  );
}
