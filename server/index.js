import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import festivalRouter from './routes/festivalRoute.js';
import paymentRouter from './routes/paymentRoute.js';
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
//testing route
app.use('/festival', festivalRouter);
// payment route
app.use('/payment', paymentRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

startServer();
