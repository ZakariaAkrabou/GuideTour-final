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

        res.status(200).json({ message: 'Logged in' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.tokenValidator = async(req,res)=>{
        const token = req.header("Authorization")
        if(!token) return res.status(401).json({ error: 'Access denied' })
        try {
            const decoded = JWT.verify(token,'GAHDYSB')
            req.userId = decoded.userId
            next()
        } catch (error) {
          res.status(401).json({ error: 'Invalid token' });
        }
}