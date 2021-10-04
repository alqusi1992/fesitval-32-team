import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).send(tickets);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};
