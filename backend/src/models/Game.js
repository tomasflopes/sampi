const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  players: Int32Array,
  date: Date,
  location: String,
  result: String,
  mvp: BigInt,
});

module.exports = mongoose.model('Game', GameSchema);
