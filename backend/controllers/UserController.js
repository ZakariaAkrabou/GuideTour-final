const User = require('../models/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const UserController = {
    getAllUsers: async(req,res)=>{
      try {
          const allUsers = await User.find()
          if(allUsers.length === 0){
              res.status(404).json("There Is No Users To Show")
          } else{
              res.status(200).json(allUsers)
          }
      } catch (error) {
          res.status(500).json(error)
      }
    },
  
    getUserById: async(req, res) => {
      try {
        const user = await User.findById(req.params.id)
            if(!user){
                res.status(404).json("No User Was Found")
            } else{
                res.status(201).json(user)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
  
    createUser: async (req, res) => {
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
  
    updateUser: async (req,res) => {
      const  userId = req.params.id
      const updates = req.body;
        try {
            if (updates.password) {
                const hashedPassword = await bcrypt.hash(updates.password, 10);
                updates.password = hashedPassword;
              }

            const UserId = await User.findByIdAndUpdate(userId,updates, { new: true })
            if(!UserId){
            return  res.status(404).json({error: 'There is no User with this ID'})
            }
              res.status(200).json(UserId)
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the USER' })
        }
      
    },
  
    deleteUser: async (req,res) => {
      try {
          const removedUser = await User.findByIdAndDelete(req.params.id);
          if (!removedUser)
          {return res.status(404).json({error: 'There Is No USER to DELETE'})}
      res.status(200).json({message:'User has been deleted'})
      } catch (error) {
          res.status(500).json({error: 'an ERROR while DELETING a USER'})
      }}
  };
  
  module.exports = UserController;
  