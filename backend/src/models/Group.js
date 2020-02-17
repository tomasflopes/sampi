const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  players: [String],
});

module.exports = mongoose.model('Group', GroupSchema);
