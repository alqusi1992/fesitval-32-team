import Festival from '../models/Festival.js';

export const getFestivals = async (req, res) => {
  const festival = new Festival({
    name: 'hack your festival',
    description: 'a festival where you hack the world ',
    capacityPerDay: 300,
    startTimeStamp: Date.now(),
    endTimeStamp: Date.now(),
  });
  try {
    const result = await festival.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
