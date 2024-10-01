const express = require("express");
const portectRoute = require("../middleware.js/protectRoute");
const { getSidebarUser } = require("../controllers/user.controllers");

const router = express.Router();

router.get("/getsidebaruser", portectRoute, getSidebarUser);

module.exports = router;
