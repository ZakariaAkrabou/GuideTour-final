const User = require("../models/User");
const Guide = require("../models/Guide");

const AdminController = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
      if (allUsers.length === 0) {
        res.status(404).json("There Is No Guides To Show");
      } else {
        res.status(200).json(allUsers);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json("No User Was Found");
      } else {
        res.status(201).json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    try {
      const UserId = await User.findByIdAndUpdate(userId, updates, {
        new: true,
      });
      if (!UserId) {
        return res.status(404).json({ error: "There is no User with this ID" });
      }
      res.status(200).json(UserId);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the USER" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const removedUser = await User.findByIdAndDelete(req.params.id);
      if (!removedUser) {
        return res.status(404).json({ error: "There Is No USER to DELETE" });
      }
      res.status(200).json({ message: "User has been deleted" });
    } catch (error) {
      res.status(500).json({ error: "an ERROR while DELETING a USER" });
    }
  },

  getAllGuides: async (req, res) => {
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
  },
};

module.exports = AdminController;


