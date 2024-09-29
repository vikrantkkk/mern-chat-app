const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const portectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "You are not authorized to access this route" });
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decodeToken.userId }).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = portectRoute;
