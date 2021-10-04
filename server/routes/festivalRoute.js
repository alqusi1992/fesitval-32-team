import express from 'express';
import { getFestivals } from '../controllers/festival.js';

const festivalRouter = express.Router();

festivalRouter.get('/', getFestivals);
export default festivalRouter;
