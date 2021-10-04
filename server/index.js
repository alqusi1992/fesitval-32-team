import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import festivalRouter from './routes/festivalRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
// testing route
app.use('/festival', festivalRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

startServer();
