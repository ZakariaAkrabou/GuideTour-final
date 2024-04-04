<<<<<<< HEAD

const bcrypt = require('bcryptjs')

const UserController = {

    getAllUsers: async(req,res)=>{
      try {
          const allUsers = await User.find()
          if(allUsers.length === 0){
              res.status(404).json("There Is No Users To Show")
          } else{
              res.status(200).json({

                message,
                allUsers
                
                });
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
  
  
  
    updateUser: async (req,res) => {
      const  userId = req.params.id
      const updates = req.body;
        try {
            if (updates.password) {
                const hashedPassword = await bcrypt.hash(updates.password, 10);
                updates.password = hashedPassword;
              }
=======
const User = require("../models/User");
const Guide = require("../models/Guide");
>>>>>>> 30fa2ec3fbceae0297a767b705b64d916bf62507

exports.getUserProfile = async function(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (user.role === "user") {
     
      return res.json(user);
    } else if (user.role === "guide") {
     
      const guideInfo = await Guide.findOne({ user_id: userId });

      if (!guideInfo) {
        return res.status(404).json({ error: "Guide information not found" });
      }

      const userProfile = {
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phone: user.phone,
          age: user.age,
          country: user.country,
          role: user.role,
        },
        guide: {
          bio: guideInfo.bio,
          specialization: guideInfo.specialization,
          profile_picture: guideInfo.profile_picture,
          identity: guideInfo.identity,
          certificate: guideInfo.certificate,
          status: guideInfo.status,
        },
      };

      return res.status(200).json({data:userProfile});
    } else {
      return res.status(400).json({ error: "Invalid user role" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.switchProfile = async function(req, res) {
  try {
    const { id } = req.params;
    const { user } = req;

    if (user._id.toString() !== id) {
      return res
        .status(403)
        .json({ error: "Forbidden: You can only switch your own profile" });
    }

    const guideData = req.body;

    guideData.profile_picture = req.files["profile_picture"][0].path;
    guideData.identity = req.files["identity"][0].path;
    guideData.certificate = req.files["certificate"][0].path;

    await User.findByIdAndUpdate(id, { role: "guide" });

    const newGuide = new Guide({
      user_id: id,
      bio: guideData.bio,
      specialization: guideData.specialization,
      profile_picture: guideData.profile_picture,
      identity: guideData.identity,
      certificate: guideData.certificate,
    });

    const savedGuide = await newGuide.save();

    res.status(200).json({
      message: "Your profile updated successfully. Wait for Admin Approval!",
      guide: savedGuide,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "There is no User with this ID" });
    }
    res.status(200).json({data:updatedUser});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};