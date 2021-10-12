import React, { useEffect, useState } from 'react';
import { useGuestContext } from '../../../context/guestContext';
import Ticket from './Ticket';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const { guestUserOrder } = useGuestContext();
  let totalTicketsPrice = 0;
  if (guestUserOrder.tickets.length > 0) {
    totalTicketsPrice = guestUserOrder.tickets.reduce(
      (acc, value) => acc + value.price * value.quantity,
      0,
    );
  }
  const fetchTickets = async () => {
    try {
      const url = process.env.REACT_APP_SERVER_URL + '/tickets';
      const response = await fetch(url);
      const { tickets } = await response.json();
      setTickets(tickets);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTickets();
    localStorage.removeItem('orderInfo');
  }, []);

  return (
    <div>
      {error && <h3>Sorry! the tickets are not available now</h3>}
      {tickets &&
        tickets.map((ticket) => {
          return <Ticket ticket={ticket} />;
        })}
      <h1>Total: € {totalTicketsPrice}</h1>
    </div>
  );
};
export default Tickets;
