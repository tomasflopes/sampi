const jwt = require('jsonwebtoken');

const verify = (request, response, next) => {
  const token = request.header('auth-token');

  if (!token) return response.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {

  }
}
