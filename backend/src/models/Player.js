const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  avatar_url: String,
  sex: String,
  birth: Date,
  email: String,
  phone: Number,
  position: String,
});

module.exports = mongoose.model('Player', PlayerSchema);
