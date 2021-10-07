import React from "react";
import { PopupTicketStyles } from "./PopupTicketStyles";

const PopupTicket = ({ trigger, ticket }) => {
  return trigger ? (
    <PopupTicketStyles>
      <div></div>
    </PopupTicketStyles>
  ) : (
    ""
  );
};

export default PopupTicket;
