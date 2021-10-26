import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LoadingButton } from '@mui/lab';
import { useGuestContext } from '../../context/guestContext';
import { setLocalStorage } from '../../utils/localStorage';
import { register } from '../../actions/userActions';
import { useValue } from '../../context/globalContext';

export const PayButton = () => {
  const {
    guestUserOrder: { tickets, festivalId },
    guestUserOrder: {
      userInfo: { firstName, lastName, email, password },
    },
  } = useGuestContext();

  const { dispatch } = useValue();

  const order = {
    firstName,
    lastName,
    email,
    tickets,
    festivalId,
  };
  const [loading, setLoading] = useState(false); // to disable the payButton with first click

  const payTickets = async () => {
    setLoading(true); // disable button when click
    try {
      if (password !== null) {
        // register account
        await register(
          { firstName, lastName, email, password, phone: '' },
          dispatch
        );
      }
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/payment`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(order),
        }
      );
      const { url, msg, success, orderInfo } = await response.json();

      if (!success) {
        console.log(msg);
        // here we still should add errorHandling(alert) when context is merged
      } else {
        setLocalStorage('orderInfo', orderInfo);
        window.location = url;
      }
    } catch (error) {
      console.log(error);
      // here we still should add errorHandling(alert) when context is merged
    }
  };

  return (
    <div>
      <LoadingButton
        endIcon={<CreditCardIcon />}
        onClick={payTickets}
        loading={loading}
        loadingPosition='end'
        variant='contained'
      >
        Pay with card
      </LoadingButton>
    </div>
  );
};
