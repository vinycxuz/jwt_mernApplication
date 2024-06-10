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

  module.exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password){
        return res.status(400).json({ message: 'Email and password are required' });
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      const auth = await bycrypt.compare(password, user.password);
      if(!auth){
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      const secretToken = createSecretToken(user._id);
      res.cookie('secretToken', secretToken, { 
        httpOnly: false, 
        withCredentials: true 
      });
      res.status(200).json({ message: 'Login successful', user });
      next();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }