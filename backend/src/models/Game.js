const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  teamA: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  teamB: [{
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
  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  }
});

module.exports = mongoose.model('Game', GameSchema);
