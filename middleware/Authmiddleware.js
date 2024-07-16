const User = require('../models/signup.model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if(!token){
    return res.json({ message: 'Unauthorized' });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (error, data) => {
    if(error){
      return res.json({ message: 'Unauthorized' });
    } else {
      const user = await User.findById(data.id);
      if(user)
        return res.json({ message: 'Authorized', user: user.$cloneusername });
      else
        return res.json({ message: 'Unauthorized' });
    }
  });
}
