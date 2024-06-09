const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const {STRING_CONNECTION} = process.env;

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

