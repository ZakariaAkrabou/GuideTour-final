const User = require('../models/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

exports.logingValidator = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ error: 'Email not found' });
        }

        const passCheck = await bcrypt.compare(password, user.password);
        if (!passCheck) {
            return res.status(401).json({ message: 'Authentication failed' }); 
        }
        // const token = JWT.sign({userid: user._id}, 'GAHDYSB', {expiresIn: '1h'})
        res.status(200).json({ message: 'Logged in',token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.tokenValidator = async (req, res, next) => {
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