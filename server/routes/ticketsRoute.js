import express from 'express';
import { getTickets } from '../controllers/tickets.js';

const ticketRouter = express.Router();
ticketRouter.get('/', getTickets);

export default ticketRouter;
