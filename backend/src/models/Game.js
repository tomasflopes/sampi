const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  teamA: [
    {
      type: Object,
      required: true,
    },
  ],
  teamB: [
    {
      type: Object,
      required: true,
    },
  ],
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
    type: Object,
  },
  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
});

module.exports = mongoose.model('Game', GameSchema);
