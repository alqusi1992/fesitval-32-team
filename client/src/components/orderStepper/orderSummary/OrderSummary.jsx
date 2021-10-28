import { Grid } from '@mui/material';
import React from 'react';
import { PayButton } from '../..';
import { useGuestContext } from '../../../context/guestContext';
import { useStyles } from '../orderSummary/OrderSummaryStyles';

const OrderSummary = () => {
  const { guestUserOrder } = useGuestContext();
  const {
    userInfo: { firstName, lastName, email },
    tickets,
  } = guestUserOrder;
  const classes = useStyles();

  const totalTicketsPrice = guestUserOrder.tickets.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0,
  );

  return (
    <Grid container position='relative'>
      <Grid container className={classes.tableOrder}>
        <Grid container justifyContent='center' item xs={12}>
          <div className={classes.behindColor}>
            <h2 className={classes.BuyTicketTitle} justifyContent='center'>
              ORDER OVERVIEW
            </h2>
          </div>
        </Grid>
        <div className={classes.userContainer}>
          <Grid container item xs={12} className={classes.userInfo}>
            <div>
              <h3 className={classes.personalDetailsHeader}>PERSONAL DETAILS</h3>
              <div className={classes.personalDetails}>
                <Grid item xs={12}>
                  First name: {firstName}
                </Grid>
                <Grid item xs={12}>
                  Last name: {lastName}
                </Grid>
                <Grid item xs={12}>
                  Email address: {email}
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid container item xs={12} className={classes.orderContainer}>
            <Grid container item xs={12} className={classes.orderTitels}>
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
              <Grid container item xs={12} key={idx} className={classes.orderInfo}>
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
            <Grid container item xs={12} className={classes.totalPrice}>
              <Grid textAlign='center'>Total: € {totalTicketsPrice}</Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid container item xs={12} className={classes.buttonPay}>
        <PayButton />
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
