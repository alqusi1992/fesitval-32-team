import { Grid } from '@mui/material';
import React from 'react';
import { PayButton } from '../..';
import { useGuestContext } from '../../../context/guestContext';

const OrderSummary = () => {
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
    <Grid container>
      <Grid container justifyContent='center' item xs={12}>
        <h2>Buy Your Tickets</h2>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          First name: {firstName}
        </Grid>
        <Grid item xs={12}>
          Last name: {lastName}
        </Grid>
        <Grid item xs={12}>
          Email address: {email}
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            Ticket Type
          </Grid>
          <Grid item xs={4}>
            Price/ticket
          </Grid>
          <Grid item xs={4}>
            Quantity
          </Grid>
        </Grid>
        {tickets.map((ticket, idx) => (
          <Grid container item xs={12} key={idx}>
            <Grid item xs={4}>
              {ticket.typeName}
            </Grid>
            <Grid item xs={4}>
              € {ticket.price}
            </Grid>
            <Grid item xs={4}>
              {ticket.quantity}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12}>
        <Grid>Total: € {totalTicketsPrice}</Grid>
      </Grid>
      <Grid container item xs={12}>
        <PayButton />
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
