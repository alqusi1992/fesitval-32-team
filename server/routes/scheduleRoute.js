import { Router } from 'express';
import { getSchedules } from '../controllers/schedule.js';

const scheduleRouter = Router();

scheduleRouter.get('/:festivalId', getSchedules);

export default scheduleRouter;
