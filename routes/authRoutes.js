const express = require("express");
const { signUp, logIn } = require("../controllers/authController");
const router = express.Router();
router.get("/sign-up", signUp);
router.get("/login", logIn);
module.exports = router;
