import React, { useCallback, useEffect, useState } from 'react';
import { useGuestContext } from '../../../context/guestContext';
import { ButtonWrapper, TicketsWrapper } from './ticketsStyles';

const Ticket = ({ ticket }) => {
  const [ticketsQty, setTicketsQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { guestUserOrder, setGuestUserOrder } = useGuestContext();

  const addTicket = () => {
    setTicketsQty(ticketsQty + 1);
    setTotalPrice(totalPrice + ticket.price);
  };

  const removeTicket = () => {
    if (ticketsQty > 0) {
      setTicketsQty(ticketsQty - 1);
      setTotalPrice(totalPrice - ticket.price);
    }
  };

  const storeOrderInContext = (ticketsQty) => {
    setGuestUserOrder((prev) => {
      const foundTicket = prev.tickets.find((t) => t.id === ticket._id);
      if (foundTicket) {
        foundTicket.quantity = ticketsQty;
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
          quantity: ticketsQty,
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
        (t) => t.id === ticket._id,
      );
      if (foundTicket) {
        setTicketsQty(foundTicket.quantity);
        setTotalPrice(foundTicket.price * foundTicket.quantity);
      }
    }
  }, [guestUserOrder.tickets, ticket._id]);

  useEffect(() => {
    checkPreviousValues();
  }, [checkPreviousValues]);

  return (
    <TicketsWrapper key={ticket._id}>
      <h1>{ticket.typeName}</h1>
      <h1>€ {ticketsQty === 0 ? ticket.price : totalPrice}</h1>
      {ticketsQty === 0 ? (
        <div>
          <ButtonWrapper
            disabled={ticket.availableQty === 0}
            onClick={() => {
              addTicket();
              storeOrderInContext(ticketsQty + 1);
            }}
          >
            {ticket.availableQty === 0 ? 'SOLD OUT' : 'ADD TO CART'}
          </ButtonWrapper>
        </div>
      ) : (
        <div>
          <ButtonWrapper
            onClick={() => {
              removeTicket();
              storeOrderInContext(ticketsQty - 1);
            }}
          >
            -
          </ButtonWrapper>
          <span>{ticketsQty}</span>
          <ButtonWrapper
            onClick={() => {
              addTicket();
              storeOrderInContext(ticketsQty + 1);
            }}
          >
            +
          </ButtonWrapper>
        </div>
      )}
    </TicketsWrapper>
  );
};

export default Ticket;
