import React from 'react';
import { Grid } from '@mui/material';
import { classes } from './OrderSummaryStyles';

const OrderSummaryItem = ({ firstName, lastName, email, tickets, totalTicketsPrice }) => {
  const {
    tableOrder,
    behindColor,
    BuyTicketTitle,
    userContainer,
    userInfo,
    personalDetailsHeader,
    personalDetails,
    orderContainer,
    orderTitles,
    orderInfo,
    totalPrice,
  } = classes;

  return (
    <Grid container position='relative'>
      <Grid container sx={tableOrder}>
        <Grid container justifyContent='center' item xs={12}>
          <Grid sx={behindColor}>
            <Grid sx={BuyTicketTitle}>ORDER OVERVIEW</Grid>
          </Grid>
        </Grid>
        <Grid sx={userContainer}>
          <Grid container item xs={12} sx={userInfo}>
            <Grid container>
              <Grid item xs={12} sx={personalDetailsHeader}>
                PERSONAL DETAILS
              </Grid>
              <Grid item xs={12} sx={personalDetails}>
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
            </Grid>
          </Grid>
          <Grid container item xs={12} sx={orderContainer}>
            <Grid container item xs={12} sx={orderTitles}>
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
              <Grid container item xs={12} key={idx} sx={orderInfo}>
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
            <Grid container item xs={12} sx={totalPrice}>
              <Grid textAlign='center'>Total: € {totalTicketsPrice}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderSummaryItem;
