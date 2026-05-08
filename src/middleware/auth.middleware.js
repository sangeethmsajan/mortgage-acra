// middleware/auth.middleware.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const authHeader = req.headers['authorization']?.split(' ')[1];
  if (!authHeader) {
    return res.status(401).json({
      message: 'Token missing'
    });
  }

  const token = authHeader;

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (err) {

    return res.status(403).json({
      message: 'Invalid token'
    });

  }
};