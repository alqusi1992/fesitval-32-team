import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LoadingButton } from '@mui/lab';
import { useGuestContext } from '../../context/guestContext';
import { setLocalStorage } from '../../utils/localStorage';

export const PayButton = () => {
  const {
    guestUserOrder: { tickets, festivalId },
    guestUserOrder: {
      userInfo: { firstName, lastName, email },
    },
  } = useGuestContext();
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
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/payment`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(order),
        },
      );
      const { url, msg, success, orderInfo } = await response.json();

      if (!success) {
        console.log(msg);
        // here we still should add errorHandling(alert) when context is merged
      } else {
        setLocalStorage('orderInfo', orderInfo);
        localStorage.removeItem('guestUserOrder');
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
