import React, { useEffect, useState } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const fetchTickets = async () => {
    try {
      const url = process.env.TICKETS_URL || "http://localhost:3000/tickets";
      const response = await fetch(url);
      const { tickets } = await response.json();

      setTickets(tickets);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <div>
      {error && <h3>{error}</h3>}
      {tickets &&
        tickets.map((ticket) => {
          return (
            <div key={ticket._id}>
              <h1>{ticket.typeName}</h1>
              <p>{ticket.price}</p>
              <p>{ticket.availableQty}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tickets;
