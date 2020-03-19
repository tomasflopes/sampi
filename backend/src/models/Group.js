const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
});

module.exports = mongoose.model('Group', GroupSchema);
