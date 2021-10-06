import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import festivalRouter from './routes/festivalRoute.js';
import paymentRouter from './routes/paymentRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.use(express.json());
app.use('/festival', festivalRouter);
// payment route
app.use('/payment', paymentRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

startServer();
