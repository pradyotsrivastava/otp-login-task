const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers.js");

// Routes
router.post("/user/register", controllers.userregister);
router.post("/user/sendotp", controllers.userOtpSend);
router.post("/user/login", controllers.userLogin);

module.exports = router;
