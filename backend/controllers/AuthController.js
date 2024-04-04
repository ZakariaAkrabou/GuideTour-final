
const bcrypt = require('bcryptjs')


exports.register = async (req, res) => {
    const {firstName,lastName,email,address,phone,password,age,country} = req.body
    try {
        const newUser = new User({firstName,lastName,email,address,phone,password,age,country})
        const token = JWT.sign({userid: newUser._id}, 'GAHDYSB', {expiresIn: '1h'})
        newUser.confirmationToken = token
        await newUser.save()
        res.status(201).json({User:newUser,token})
    } catch (error) {
        res.status(500).json(error)
    }
  },


exports.login = async (req, res) => {
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

