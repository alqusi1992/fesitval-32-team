import express from 'express';
import { getFestivals } from '../controllers/festival';

const festivalRouter = express.Router();

festivalRouter.get('/', getFestivals);
export default festivalRouter;
