import React, { useState } from 'react';

export const PayButton = () => {
  const [disable, setDisable] = useState(false); // to disable the payButton with first click
  // this array is just for testing
  const tickets = [
    {
      typeName: 'Early Bird',
      quantity: 2,
      price: 20,
    },
    {
      typeName: 'Regular',
      quantity: 4,
      price: 30,
    },
  ];

  const payTickets = async () => {
    setDisable(true); // disable button when click
    try {
      const response = await fetch('/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(tickets),
      });
      const { url, msg } = await response.json();

      if (msg) {
        console.log(msg);
        // here we still should add errorHandling(alert) when context is merged
      } else {
        window.location = url;
      }
    } catch (error) {
      console.log(error);
      // here we still should add errorHandling(alert) when context is merged
    }
  };
  return (
    <div>
      <button disabled={disable ? true : false} onClick={payTickets}>
        Pay with card
      </button>
    </div>
  );
};
