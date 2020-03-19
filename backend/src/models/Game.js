const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
  result: {
    type: String,
  },
  mvp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Game', GameSchema);
