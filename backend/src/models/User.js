const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password_hash: String,
});

module.exports = mongoose.model('User', UserSchema);
