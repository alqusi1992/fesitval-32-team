import { useEffect, useRef } from 'react';
import { useValue } from '../../context/globalContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { useStyles } from './AlertStyles';

const Alert = () => {
  const {
    state: { alert },
    dispatch,
  } = useValue();
  const alertTime = useRef();
  const alertDiv = useRef();
  useEffect(() => {
    alertDiv.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });

    alertTime.current = setTimeout(() => {
      dispatch({ type: 'CLOSE_ALERT' });
    }, 5000);
    return () => {
      clearTimeout(alertTime.current);
    };
  }, [dispatch]);

  const handleClick = () => {
    dispatch({ type: 'CLOSE_ALERT' });
    clearTimeout(alertTime.current);
  };

  const classes = useStyles();
  return (
    <div ref={alertDiv} className={`${classes.alert} ${classes[alert.type]}`}>
      <CancelIcon className={classes.alertCancel} onClick={handleClick} />
      <p>{alert.message}</p>
    </div>
  );
};

export default Alert;
