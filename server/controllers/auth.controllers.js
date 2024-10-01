const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateTokenAdnSetCookies = require("../utills/generateToken");

exports.signup = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender } =
      req.body;

    if (!(name && username && password && confirmPassword && gender)) {
      return res
        .status(400)
        .json({ status: true, message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: true, messae: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ status: true, message: "Username already exists" });
    }

    const generateSalt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, generateSalt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      gender,
      profilePic : gender === "male" ? boyProfilePic : girlProfilePic,
    });
    generateTokenAdnSetCookies(newUser._id, res);
    return res.status(201).json({
      status: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username, password)) {
      res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    }
    const bcryptPassword = await bcrypt.compare(password, user.password);
    if (!bcryptPassword) {
      res.status(400).json({ message: "Invalid credentials" });
    }
    generateTokenAdnSetCookies(user._id, res);
    return res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
