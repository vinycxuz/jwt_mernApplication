const mongoose =  require('mongoose');
const bycrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function(){
  this.password = await bycrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema);
