const express = require("express");
const {
  login,
  signup,
  logout,
  getSidebarUser,
} = require("../controllers/user.controllers");
const portectRoute = require("../middleware.js/protectRoute");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getsidebaruser",portectRoute, getSidebarUser);

module.exports = router;
