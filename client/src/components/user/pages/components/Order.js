import { Grid } from '@mui/material';
import { DownloadButton } from '../../../downloadButton/DownloadButton';
import { classes } from './OrderStyle';

const {
  tableOrder,
  orderHeader,
  orderContainer,
  orderTitles,
  orderDetails,
  orderItem,
  totalPriceContainer,
} = classes;

export const Order = ({ order }) => {
  const { totalQty, totalPrice } = order.tickets.reduce(
    (total, ticket) => {
      total.totalQty += ticket.quantity;
      total.totalPrice += ticket.price * ticket.quantity;
      return total;
    },
    { totalQty: 0, totalPrice: 0 },
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
          <Grid>{totalQty}</Grid>
          <Grid>€{totalPrice}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
