const User = require("../models/User");
const Guide = require("../models/Guide");

exports.getUserProfile = async function(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.role === "user") {
      return res.json(user);
    } else if (user.role === "guide") {
      const guideInfo = await Guide.findOne({ user_id: userId });

      if (!guideInfo) {
        return res.status(404).json({ error: "Guide information not found" });
      }

      const userProfile = {
        user: {
          id: user.id,
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
          id: guideInfo.id,
          bio: guideInfo.bio,
          specialization: guideInfo.specialization,
          profile_picture: guideInfo.profile_picture,
          identity: guideInfo.identity,
          certificate: guideInfo.certificate,
          status: guideInfo.status,
        },
      };

      return res.status(200).json({ data: userProfile });
    } else {
      return res.status(400).json({ error: "Invalid user role" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.switchProfile = async function(req, res) {
  try {
    const { id } = req.params;
    const { user } = req;

    if (!id || !user) {
      return res.status(400).json({ error: "Invalid request" });
    }

    if (user._id.toString() !== id) {
      return res
        .status(403)
        .json({ error: "Forbidden: You can only switch your own profile" });
    }

    const guideData = req.body;

    if (!guideData.bio || !guideData.specialization) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!req.files || !req.files["profile_picture"] || !req.files["identity"] || !req.files["certificate"]) {
      return res.status(400).json({ error: "Missing required files" });
    }

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
    if (!userId) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ data: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
