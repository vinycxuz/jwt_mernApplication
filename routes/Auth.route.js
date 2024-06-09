const { signup } = require('../controllers/AuthController');
const route = require('express').Router();

route.post('/signup', signup);

module.exports = route;