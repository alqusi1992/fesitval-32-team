import Ticket from "../models/Ticket";

export const getTickets = async (req, res) => {
  const ticket = new Ticket({
    price: {},
    type_name: {},
    available_qty: {},
    festival_id: {},
  });

  try {
    const result = await ticket.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
