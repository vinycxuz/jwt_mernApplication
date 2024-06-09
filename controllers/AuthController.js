const User = require('../models/signup.model');
const { createSecretToken } = require('../utils/secretToken');
const bycrypt = require('bcrypt');

module.exports.signup = async (req, res, next) => {
  try {
    const { email, username, password, date } = req.body;
    const existingUser =  await User.findOne({ email });

    if(existingUser){
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      username,
      password,
      date
    });

    const secretToken = createSecretToken(user._id);
    res.cookie('secretToken', secretToken, { httpOnly: false, withCredentials: true });
    res.status(201).json({ message: 'User created successfully', user });
    next();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    } 
  }