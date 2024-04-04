
const JWT = require("jsonwebtoken");
const User = require("../models/User");

exports.AuthorizationUser = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ error: 'Access denied: No token provided' });
    }
    try {
        const decoded = JWT.verify(token.replace('Bearer ', ''), 'GAHDYSB');
        req.userId = decoded.userid;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};


exports.authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied: Authenticate first" });
    }
    const decoded = JWT.verify(token.replace("Bearer ", ""), "GAHDYSB");
    const user = await User.findById(decoded.userid);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(401).json({ error: "Unauthorized: Only admin users allowed" });
  }
  next();
};
