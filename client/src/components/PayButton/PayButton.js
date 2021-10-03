import React from 'react';

export const PayButton = () => {
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
      <button onClick={payTickets}>Pay with card</button>
    </div>
  );
};
