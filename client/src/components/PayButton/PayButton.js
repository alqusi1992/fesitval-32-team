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
    setDisable(true);
    try {
      const response = await fetch('/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(tickets),
      });
      const { url } = await response.json();
      window.location = url;
    } catch (error) {
      console.log(error);
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
