const User = require("../models/User");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const {
  verifyEmail,
  ResetPasswordEmail,
} = require("../middlewares/emailValidator");



exports.createUser = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      address,
      phone,
      password,
      age,
      country,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    try {
      const newUser = new User({
        firstName,
        lastName,
        email,
        address,
        phone,
        password,
        age,
        country,
      });
      const token = JWT.sign({ userid: newUser._id }, "GAHDYSB", {
        expiresIn: "1h",
      });
      newUser.confirmationToken = token;
      await newUser.save();
      const link = `http://localhost:3000/api/auth/register/confirm/${token}`;
      await verifyEmail(email, link, newUser.firstName);
      res.status(201).json({ message: "Registred successfult " });
    } catch (error) {
      res.status(500).json(error);
    }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    }
    const token = JWT.sign({ userid: user._id }, "GAHDYSB", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Logged successfuly", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.emailConfirm = async (req, res) => {
  try {
    const userToken = await User.findOne({
      confirmationToken: req.params.token,
    });
    if (!userToken) {
      return res.status(404).json({ message: "Token not found" });
    }

    await User.updateOne(
      { _id: userToken._id },
      { $set: { isConfirmed: true }, $unset: { confirmationToken: 1 } }
    );
    res.status(200).json({ message: "Verified Successfuly" });
  } catch (error) {
    res.status(500).json(error);
  }
};

function generateToken() {
  return JWT.sign({}, "GAHDYSB", { expiresIn: "1h" });
}

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = generateToken();
    user.forgotPasswordToken = token;

    await user.save();

    const link = `http://localhost:3000/api/auth/rest-password/${token}`;
    await ResetPasswordEmail(email, link, user.firstName);

    res.status(200).json({ message: "Please Check Your INBOX Mail" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.restPassword = async (req, res) => {
  const token = req.params.token;
  const newPassword = req.body.password;
  try {
    const user = await User.findOne({ forgotPasswordToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid or expired token" });
    }
    user.password = newPassword;
    user.forgotPasswordToken = null;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
