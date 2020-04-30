const User = require('../../src/models/User');
const mongoose = require('mongoose');

module.exports = purgeMockUsers = async () => {
  await User.deleteMany({ position: 'Defender' });

  await mongoose.disconnect();
}
