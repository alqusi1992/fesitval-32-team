import React from 'react';
import { useGuestContext } from '../../../context/guestContext';
import useScrollToTop from '../../../utils/useScrollToTop';
import OrderSummaryItem from './OrderSummaryItem';

const OrderSummary = () => {
  useScrollToTop();
  const { guestUserOrder } = useGuestContext();
  const {
    userInfo: { firstName, lastName, email },
    tickets,
  } = guestUserOrder;

  const totalTicketsPrice = guestUserOrder.tickets.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0,
  );

  return (
    <>
      <OrderSummaryItem
        firstName={firstName}
        lastName={lastName}
        email={email}
        tickets={tickets}
        totalTicketsPrice={totalTicketsPrice}
      />
    </>
  );
};

export default OrderSummary;
