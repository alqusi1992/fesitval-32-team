import { Grid } from '@mui/material';
import { DownloadButton } from '../../../downloadButton/DownloadButton';
import { classes } from './OrderStyle';
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
    <Grid container sx={classes.tableOrder}>
      <Grid sx={classes.orderHeader}>
        <Grid>Order Number:</Grid>
        <Grid>{order?._id}</Grid>
        <Grid>
          <DownloadButton
            order={order}
            item
            xs={12}
            sx={classes.downloadButton}
          />
        </Grid>
      </Grid>
      <Grid container sx={classes.orderContainer}>
        <Grid container sx={classes.orderTitles}>
          <Grid>Ticket Type</Grid>
          <Grid>Quantity</Grid>
          <Grid>Price</Grid>
        </Grid>
        {order.tickets.map((ticket) => (
          <Grid key={ticket.id} sx={classes.orderDetails}>
            <Grid sx={classes.orderItem}>{ticket.typeName}</Grid>
            <Grid>{ticket.quantity}</Grid>
            <Grid>€ {ticket.price}</Grid>
          </Grid>
        ))}
        <Grid sx={classes.totalPrice}>
          <Grid sx={classes.orderItem}>Total:</Grid>
          <Grid>{totalQty}</Grid>
          <Grid>€{totalPrice}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
