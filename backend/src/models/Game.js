const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  players: [String],
  date: Date,
  location: String,
  result: String,
  mvp: String,
});

module.exports = mongoose.model('Game', GameSchema);
