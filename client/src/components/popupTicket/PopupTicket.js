import React, { useState } from 'react';
import {
  PopupTicketWrapper,
  PopupInnerWrapper,
  CloseBtn,
  ButtonWrapper,
} from './PopupTicketStyles';
import { useGuestContext } from '../../context/guestContext';
import { Link } from 'react-router-dom';

const PopupTicket = ({ trigger, setTrigger, ticket }) => {
  const [ticketsQty, setTicketsQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setGuestUserOrder } = useGuestContext();

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

  const storeOrderInContext = () => {
    setGuestUserOrder((prev) => {
      const foundTicket = prev.tickets.find((t) => t.id === ticket._id);
      if (foundTicket) {
        foundTicket.quantity = ticketsQty;
        return {
          ...prev,
        };
      } else {
        if (prev.tickets[0].id === '') {
          prev.tickets.shift();
        }
        prev.tickets.push({
          id: ticket._id,
          typeName: ticket.typeName,
          quantity: ticketsQty,
        });
        return {
          ...prev,
          festivalId: ticket.festivalId,
          tickets: prev.tickets,
        };
      }
    });
    setTrigger(false);
    setTotalPrice(0);
    setTicketsQty(0);
  };

  return trigger ? (
    <PopupTicketWrapper>
      <PopupInnerWrapper>
        <h2>{ticket.typeName}</h2> <h2>{ticket.price}€</h2>
        <ButtonWrapper onClick={removeTicket}>-</ButtonWrapper>
        <span>{ticketsQty}</span>
        <ButtonWrapper onClick={addTicket}>+</ButtonWrapper>
        <h3>{totalPrice}€</h3>
        <ButtonWrapper
          onClick={storeOrderInContext}
          disabled={ticketsQty === 0}
        >
          ADD
        </ButtonWrapper>
        <br></br>
        <Link to='/guestMode'>
          <ButtonWrapper style={{ borderRadius: '10px' }}>
            Continue as guest
          </ButtonWrapper>
        </Link>
        <Link to='/login'>
          <ButtonWrapper style={{ borderRadius: '10px', background: 'black' }}>
            Login
          </ButtonWrapper>
        </Link>
        <CloseBtn
          onClick={() => {
            setTrigger(false);
            setTotalPrice(0);
            setTicketsQty(0);
          }}
        >
          x
        </CloseBtn>
      </PopupInnerWrapper>
    </PopupTicketWrapper>
  ) : (
    ''
  );
};

export default PopupTicket;
