import React, { useCallback, useEffect, useState } from 'react';
import { useGuestContext } from '../../../context/guestContext';
import { ButtonIconWrapper, ButtonWrapper } from './ticketsStyles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Ticket = ({ ticket }) => {
  const [ticketsQuantity, setTicketsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { guestUserOrder, setGuestUserOrder } = useGuestContext();
  const smallScreen = useMediaQuery('(max-width:450px)');

  const addTicket = () => {
    const newTicketQuantity = ticketsQuantity + 1;
    setTicketsQuantity(newTicketQuantity);
    setTotalPrice(totalPrice + ticket.price);
    storeOrderInContext(newTicketQuantity);
  };

  const removeTicket = () => {
    if (ticketsQuantity > 0) {
      const newTicketQuantity = ticketsQuantity - 1;
      setTicketsQuantity(newTicketQuantity);
      setTotalPrice(totalPrice - ticket.price);
      storeOrderInContext(newTicketQuantity);
    }
  };

  const storeOrderInContext = (ticketsQuantity) => {
    setGuestUserOrder((prev) => {
      const foundTicket = prev.tickets.find((t) => t.id === ticket._id);
      if (foundTicket) {
        foundTicket.quantity = ticketsQuantity;
        if (foundTicket.quantity === 0) {
          // remove ticket from guestContext if quantity is 0
          return {
            ...prev,
            tickets: prev.tickets.filter((t) => t.id !== foundTicket.id),
          };
        } else {
          return {
            ...prev,
          };
        }
      } else {
        prev.tickets.push({
          id: ticket._id,
          typeName: ticket.typeName,
          quantity: ticketsQuantity,
          price: ticket.price,
        });
        return {
          ...prev,
          festivalId: ticket.festivalId,
          tickets: prev.tickets,
        };
      }
    });
  };

  const checkPreviousValues = useCallback(() => {
    if (guestUserOrder.tickets.length > 0) {
      const foundTicket = guestUserOrder.tickets.find(
        (t) => t.id === ticket._id
      );
      if (foundTicket) {
        setTicketsQuantity(foundTicket.quantity);
        setTotalPrice(foundTicket.price * foundTicket.quantity);
      }
    }
  }, [guestUserOrder.tickets, ticket._id]);

  useEffect(() => {
    checkPreviousValues();
  }, [checkPreviousValues]);

  return (
    <Grid
      container
      key={ticket._id}
      justifyContent='center'
      sx={{ margin: '15px' }}
    >
      <Grid
        container
        item
        s={3}
        xs={6}
        alignItems='center'
        sx={{
          fontSize: '24px',
          borderBottom: `${smallScreen ? 'none' : '2px solid #ddd'}`,
          paddingBottom: '10px',
        }}
      >
        {ticket.typeName}
      </Grid>
      <Grid
        container
        item
        s={3}
        xs={6}
        alignItems='center'
        justifyContent='flex-end'
        sx={{
          fontWeight: 'bold',
          marginRight: `${smallScreen ? '0px' : '40px'}`,
          fontSize: '30px',
          borderBottom: `${smallScreen ? 'none' : '2px solid #ddd'}`,
          paddingBottom: '10px',
        }}
      >
        € {ticketsQuantity === 0 ? ticket.price : totalPrice}
      </Grid>

      {ticket.availableQty === 0 ? (
        <Grid
          container
          item
          s={2}
          xs={12}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12}>
            <ButtonWrapper disabled> SOLD OUT</ButtonWrapper>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          item
          s={2}
          xs={12}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={4}>
            <ButtonIconWrapper
              onClick={() => {
                removeTicket();
              }}
            >
              <RemoveIcon fontSize='small' />
            </ButtonIconWrapper>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent='center'
            sx={{
              height: '45px',
              borderTop: '1px solid #ddd',
              borderBottom: '1px solid #ddd',
            }}
            alignItems='center'
          >
            {ticketsQuantity}
          </Grid>
          <Grid item xs={4}>
            <ButtonIconWrapper
              onClick={() => {
                addTicket();
              }}
            >
              <AddIcon fontSize='small' />
            </ButtonIconWrapper>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Ticket;
