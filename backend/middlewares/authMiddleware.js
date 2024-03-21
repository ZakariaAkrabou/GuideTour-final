const JWT = require('jsonwebtoken')
const User = require('../models/User')


exports.authenticateUser = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ error: 'Access denied: Authenticate first' });
    }
    try {
        const decoded = JWT.verify(token.replace('Bearer ', ''), 'GAHDYSB');
        req.userId = decoded.userid;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

exports.isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized only admin " });
    }
    next();
  };

