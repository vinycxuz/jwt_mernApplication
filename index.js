const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const {STRING_CONNECTION} = process.env;
const authRoutes = require('./routes/Auth.route');

const app = express();

app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Test');
});

app.use("/", authRoutes);

mongoose.connect(STRING_CONNECTION)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
