import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useScrollToTop from '../../../utils/useScrollToTop';
import Ticket from './Ticket';
import { classes } from './ticketsStyles';

const { ticketsContainer } = classes;

const Tickets = () => {
  useScrollToTop();
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <Grid container item xs={12} sx={ticketsContainer}>
      {error && <h3>Sorry! the tickets are not available now</h3>}
      <h2> Select Your Tickets </h2>
      {tickets &&
        tickets.map((ticket) => {
          return <Ticket key={ticket._id} ticket={ticket} />;
        })}
    </Grid>
  );
};
export default Tickets;
