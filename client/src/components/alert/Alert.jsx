import { useEffect, useRef } from 'react';
import { useValue } from '../../context/globalContext';
import CancelIcon from '@material-ui/icons/Cancel';
import { AlertCancel, AlertContainer } from './AlertStyles';

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
  const colors = {
    color: alert?.type === 'success' ? '#155724' : '#721c24',
    background: alert?.type === 'success' ? '#d4edda' : '#f8d7da',
    borderColor: alert?.type === 'success' ? '#c3e6cb' : '#f5c6cb',
  };

  return (
    <AlertContainer
      color={colors.color}
      background={colors.background}
      borderColor={colors.borderColor}
      ref={alertDiv}
    >
      <AlertCancel>
        <CancelIcon className='cancel-alert' onClick={handleClick} />
      </AlertCancel>
      <p>{alert.message}</p>
    </AlertContainer>
  );
};

export default Alert;
