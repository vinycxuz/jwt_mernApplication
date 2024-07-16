const { signup, login } = require('../controllers/AuthController');
const { userVerification } = require('../middleware/Authmiddleware');
const route = require('express').Router();

route.post('/signup', signup);
route.post('/login', login);
route.post('/', userVerification);

module.exports = route;