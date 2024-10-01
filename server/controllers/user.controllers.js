const User = require("../models/user.model");
exports.getSidebarUser = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const user = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    return res.status(200).json({
      status: true,
      message: "User found successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
