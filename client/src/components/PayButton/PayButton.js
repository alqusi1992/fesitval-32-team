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
  const payTickets = async () => {};
  return (
    <div>
      <button onClick={payTickets}>Pay with card</button>
    </div>
  );
};
