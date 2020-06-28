const jwt = require('jsonwebtoken');

const authMiddleware = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).json({ message: 'Token not Provided' });

  const [, token] = authHeader.split(' ');

  try {
    await jwt.verify(token, process.env.TOKEN_SECRET);
    return next();
  } catch (error) {
    return response.status(400).json({ message: 'Token Invalid' });
  }
};

module.exports = authMiddleware;
