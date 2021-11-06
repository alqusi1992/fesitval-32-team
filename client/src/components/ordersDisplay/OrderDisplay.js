import * as React from 'react';
import { Grid } from '@mui/material';
import { classes } from './orderDisplayStyles';
import { DownloadButton } from '../downloadButton/DownloadButton';

const {
  tableOrder,
  orderHeader,
  orderContainer,
  orderTitles,
  orderDetails,
  orderItem,
  totalPriceContainer,
} = classes;

export default function OrderDisplay({ order }) {
  const ticketsData = order.tickets.map((ticket) => {
    return {
      id: ticket.id,
      typeName: ticket.typeName,
      quantity: ticket.quantity,
      price: ticket.price,
    };
  });
  const quantitySum = ticketsData.reduce(
    (acc, value) => acc + value.quantity,
    0,
  );
  const priceSum = ticketsData.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0,
  );

  return (
    <Grid container sx={tableOrder}>
      <Grid sx={orderHeader}>
        <Grid>Order Number:</Grid>
        <Grid>{order?._id}</Grid>
        <Grid>
          <DownloadButton order={order} item xs={12} classes={classes} />
        </Grid>
      </Grid>
      <Grid container sx={orderContainer}>
        <Grid container sx={orderTitles}>
          <Grid>Ticket Type</Grid>
          <Grid>Quantity</Grid>
          <Grid>Price</Grid>
        </Grid>
        {order.tickets.map((ticket) => (
          <Grid key={ticket.id} sx={orderDetails}>
            <Grid sx={orderItem}>{ticket.typeName}</Grid>
            <Grid>{ticket.quantity}</Grid>
            <Grid>€ {ticket.price}</Grid>
          </Grid>
        ))}
        <Grid sx={totalPriceContainer}>
          <Grid sx={orderItem}>Total:</Grid>
          <Grid>{quantitySum}</Grid>
          <Grid>€{priceSum}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
