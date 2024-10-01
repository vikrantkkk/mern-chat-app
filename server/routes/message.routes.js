const express = require("express");
const { sendMessage, getMessage } = require("../controllers/message.controllers");
const portectRoute = require("../middleware.js/protectRoute");

const router = express.Router();

router.post("/sendmessage/:id",portectRoute, sendMessage);
router.get("/getmessage/:id",portectRoute, getMessage);

module.exports = router;
