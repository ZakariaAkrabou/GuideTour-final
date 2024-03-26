const Guide = require("../models/Guide");
const User = require("../models/User");

const GuideController = {
  switchProfile: async (req, res) => {
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
  },

  // showProfile: async (req, res) => {
  //   try {
  //     const id = req.params.id;
  //     if (!id) {
  //       return res.status(400).json({ error: "Guide ID is required" });
  //     }

  //     const guide = await Guide.findById(id);
  //     if (!guide) {
  //       return res.status(404).json({ error: "Guide profile not found" });
  //     }

  //     const user = await User.findById(guide.user_id);
  //     const {
  //       _id,
  //       password,
  //       forgotPasswordToken,
  //       isConfirmed,
  //       confirmationToken,
  //       ...limitedUser
  //     } = user.toObject();

  //     const fullProfile = {
  //       user: limitedUser,
  //       bio: guide.bio,
  //       specialization: guide.specialization,
  //       profile_picture: guide.profile_picture,
  //       identity: guide.identity,
  //       certificate: guide.certificate,
  //       status: guide.status,
  //     };

  //     res.status(200).json(fullProfile);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },

  deleteGuide: async (req, res) => {
    try {
      const guide = await Guide.findByIdAndDelete(req.params.id);
      if (!guide) {
        return res.status(404).json({ error: "Guide profile not found" });
      }
      res.json({ message: "Guide profile deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = GuideController;
