const jwt = require("jsonwebtoken");

const generateTokenAdnSetCookies =  (userId, res) => {
  const token =  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", 
  });
};

module.exports = generateTokenAdnSetCookies;
