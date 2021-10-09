import React, { useEffect, useState } from 'react';
import PopupTicket from '../popupTicket/PopupTicket';
import { TicketsWrapper, ButtonWrapper } from './ticketsStyles';
import { GuestProvider } from '../../context/guestContext';
const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({});
  const fetchTickets = async () => {
    try {
      const url = process.env.REACT_APP_SERVER_URL + '/tickets';
      const response = await fetch(url);
      const { tickets } = await response.json();
      setTickets(tickets);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchTickets();
    localStorage.removeItem('orderInfo');
  }, []);
  return (
    <div>
      {error && <h3>{error}</h3>}
      {tickets &&
        tickets.map((ticket) => {
          return (
            <TicketsWrapper key={ticket._id}>
              <h1>{ticket.typeName}</h1>
              {ticket.availableQty === 0 ? (
                <ButtonWrapper disabled={true}>SOLD OUT</ButtonWrapper>
              ) : (
                <>
                  <ButtonWrapper
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setShowPopup(true);
                    }}
                  >
                    Ticket Details
                  </ButtonWrapper>
                  <GuestProvider>
                    <PopupTicket
                      trigger={showPopup}
                      setTrigger={setShowPopup}
                      ticket={selectedTicket}
                    />
                  </GuestProvider>
                </>
              )}
            </TicketsWrapper>
          );
        })}
    </div>
  );
};
export default Tickets;
