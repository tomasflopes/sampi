const mongoose = require('mongoose');

const LeaderBoardSchema = new mongoose.Schema({
  orderedPlayers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  playersPoints: [{
    type: Number,
    required: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  }
});

module.exports = mongoose.model('LeaderBoard', LeaderBoardSchema);
