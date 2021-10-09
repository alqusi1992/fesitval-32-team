import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LoadingButton } from '@mui/lab';

export const PayButton = () => {
  const [loading, setLoading] = useState(false); // to disable the payButton with first click
  // this array is just for testing
  const order = {
    email: 'email@gmail.com',
    festivalId: '6155a68b2a30ca8cc74de40f',
    tickets: [
      {
        id: '6155a6c27d6165cc07b6d2a7',
        typeName: 'Early Bird',
        quantity: 2,
      },
      {
        id: '6155af5cc783295f2444cadf',
        typeName: 'Regular',
        quantity: 4,
      },
    ],
  };

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
        }
      );
      const { url, msg, success, orderInfo } = await response.json();

      if (!success) {
        console.log(msg);
        // here we still should add errorHandling(alert) when context is merged
      } else {
        localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
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
