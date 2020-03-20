const getLastElement = require('./getLastElement');
const User = require('../../src/models/User');
const jwt = require('jsonwebtoken');

module.exports = generateToken = async () => {
  const user = getLastElement(User);
  return jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
}  
