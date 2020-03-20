const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
  },
  sex: {
    type: String,
  },
  birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.generateToken = () => {
  console.log('generateToken');
};

module.exports = mongoose.model('User', UserSchema);