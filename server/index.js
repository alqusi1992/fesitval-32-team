
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/connectDB.js';
import festivalRouter from './routes/festivalRoute.js';
import paymentRouter from './routes/paymentRoute.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
