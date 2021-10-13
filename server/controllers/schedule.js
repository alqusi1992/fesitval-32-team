import Schedule from '../models/Schedule.js';

export const getSchedules = async (req, res) => {
  try {
    const { festivalId } = req.params;
    const schedules = await Schedule.find({ festivalId });
    res.status(200).json({ success: true, result: schedules });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: 'something went wrong. Try later' });
  }
};
