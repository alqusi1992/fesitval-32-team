import mongoose from 'mongoose';

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  capacityPerDay: { type: Number, required: true },
  startTimeStamp: { type: Date, required: true },
  endTimeStamp: { type: Date, required: true },
});

const Festival = mongoose.model('festivals', FestivalSchema);

export default Festival;
