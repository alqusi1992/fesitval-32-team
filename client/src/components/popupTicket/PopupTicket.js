import React, { useState } from "react";
import {
  PopupTicketWrapper,
  PopupInnerWrapper,
  CloseBtn,
} from "./PopupTicketStyles";
import { useGuestContext } from "../../context/guestContext";

const PopupTicket = ({ trigger, setTrigger, ticket }) => {
  const [ticketsNumber, setTicketsNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { guestUser, setGuestUser } = useGuestContext();

  const addTicket = () => {
    setTicketsNumber(ticketsNumber + 1);
    setTotalPrice(totalPrice + ticket.price);
  };

  const removeTicket = () => {
    if (ticketsNumber > 0) {
      setTicketsNumber(ticketsNumber - 1);
      setTotalPrice(totalPrice - ticket.price);
    }
  };

  const redirectToFormPage = () => {
    setGuestUser({
      ...guestUser,
      tickets: [{ ticket }],
      // price: totalPrice,
    });
  };
  console.log(guestUser);

  return trigger ? (
    <PopupTicketWrapper>
      <PopupInnerWrapper>
        <h2>{ticket.typeName}</h2>
        <h2>{ticket.price}</h2>
        <button onClick={removeTicket}>-</button>
        <span>{ticketsNumber}</span>
        <button onClick={addTicket}>+</button>
        <h3>{totalPrice}</h3>
        <button onClick={redirectToFormPage}>CONTINUE</button>
        <CloseBtn
          onClick={() => {
            setTrigger(false);
            setTotalPrice(0);
            setTicketsNumber(0);
          }}
        >
          x
        </CloseBtn>
      </PopupInnerWrapper>
    </PopupTicketWrapper>
  ) : (
    ""
  );
};

export default PopupTicket;
