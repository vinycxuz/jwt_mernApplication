const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const {STRING_CONNECTION} = process.env;

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

mongoose.connect(STRING_CONNECTION)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
  });
;

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
