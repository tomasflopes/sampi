const mongoose = require('mongoose');

const LeaderBoardSchema = new mongoose.Schema({
  orderedPlayers: [
    {
      type: Object,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
});

module.exports = mongoose.model('LeaderBoard', LeaderBoardSchema);
