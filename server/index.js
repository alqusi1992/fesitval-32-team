const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

startServer();
