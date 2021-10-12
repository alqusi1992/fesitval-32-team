import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  areaName: String,
  festivalId: String,
  artists: [
    {
      name: String,
      url: String,
      genre: String,
    },
  ],
});

const Schedule = mongoose.model(
  'areasSchedule',
  scheduleSchema,
  'areasSchedule',
);

export default Schedule;
