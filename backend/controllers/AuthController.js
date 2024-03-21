
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    const {firstName,lastName,email,address,phone,password,age,country} = req.body
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({message:"User already exists"});
    }
    try {
        const newUser = new User({firstName,lastName,email,address,phone,password,age,country})
        const token = JWT.sign({userid: newUser._id}, 'GAHDYSB', {expiresIn: '1h'})
        newUser.confirmationToken = token
        await newUser.save()
        res.status(201).json({message:"Registred successfult "})
       } catch (error) {
        res.status(500).json(error)
    }
  }

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ error: 'Invalid Email or password' });
        }

        const passCheck = await bcrypt.compare(password, user.password);
        if (!passCheck) {
            return res.status(401).json({ message: 'Invalid Email or password' }); 
        }
        const token = JWT.sign({userid: user._id}, 'GAHDYSB', {expiresIn: '1h'})
        res.status(200).json({ message: 'Logged successfuly', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};