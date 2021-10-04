import express from "express";
import { getTickets } from "../controllers/tickets";

const ticketRouter = express.Router();
ticketRouter.get("/tickets", getTickets);

export default ticketRouter;
