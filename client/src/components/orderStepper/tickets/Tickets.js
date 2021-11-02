import { Grid } from '@mui/material';
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
      0
    );
  }
  const fetchTickets = async () => {
    try {
      const url = process.env.REACT_APP_SERVER_URL + '/tickets';
      const response = await fetch(url);
      const { tickets } = await response.json();
      setTickets(tickets);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTickets();
    });
    localStorage.removeItem('orderInfo');
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Grid container sx={{ padding: '40px 0px' }}>
      <Grid container item xs={12} justifyContent='center'>
        {error && <h3>Sorry! the tickets are not available now</h3>}
        <h2> Select Your Tickets </h2>
        {tickets &&
          tickets.map((ticket) => {
            return <Ticket key={ticket._id} ticket={ticket} />;
          })}
      </Grid>
      <Grid container item xs={12} justifyContent='center'>
        <Grid
          container
          item
          s={3}
          sx={{ fontWeight: 'bold', fontSize: '20px' }}
        >
          Total: € {totalTicketsPrice}
        </Grid>
        <Grid item s={3}></Grid>
        <Grid item s={2}></Grid>
      </Grid>
    </Grid>
  );
};
export default Tickets;
