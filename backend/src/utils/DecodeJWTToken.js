const jwt = require('jsonwebtoken');

const DecodeJWTToken = async request => {
  const authHeader = request.headers.authorization;

  const [, token] = authHeader.split(' ');
  const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);

  return decoded._id;
};

module.exports = DecodeJWTToken;
