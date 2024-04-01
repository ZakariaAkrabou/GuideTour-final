const User = require("../models/User");
const Guide = require("../models/Guide");

// user managment
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({ role: "user" });
    if (allUsers.length === 0) {
      res.status(404).json("There Is No Users To Show");
    } else {
      res.status(200).json(allUsers);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    if (!removedUser) {
      return res.status(404).json({ error: "There Is No USER to DELETE" });
    }
    if (removedUser.role === 'guide') {
      await Guide.findOneAndDelete({ user_id: removedUser._id });
    }

    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//guide managment
exports.getAllGuides = async (req, res) => {
  try {
    const allGuides = await Guide.find();

    const allGuideDetails = [];

    for (const guide of allGuides) {
      const user = await User.findById(guide.user_id);

      if (!user) {
        console.log(`User with ID ${guide.user_id} not found`);
        continue;
      }

      const guideProfile = {
        user_id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        bio: guide.bio,
        specialization: guide.specialization,
        profile_picture: guide.profile_picture,
        identity: guide.identity,
        certificate: guide.certificate,
        status: guide.status,
      };

      allGuideDetails.push(guideProfile);
    }

    res.status(200).json(allGuideDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGuideById = async (req, res) => {
  try {
    const { id } = req.params; 
    const guide = await Guide.findById(id);
    if (!guide) {
      return res.status(404).json({ error: "Guide not found" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGuideStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const updatedGuide = await Guide.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    if (!updatedGuide) {
      return res.status(404).json({ error: "Guide not found" });
    }
    res.status(200).json({message:"Status Has Been Changed Successfuly"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
