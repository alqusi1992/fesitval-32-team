import React, { useEffect } from 'react';

export const SuccessPage = () => {
  const createOrder = async () => {
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));
    if (orderInfo !== null) {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/order`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(orderInfo),
        },
      );
      const res = await response.json();
      console.log(res);
    }
  };
  useEffect(() => {
    createOrder();
  }, []);
  return <div>successPage</div>;
};
