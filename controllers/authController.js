const User = require("../models/User");
const { validationResult } = require("express-validator");
const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email, username });
    if (user) {
      res.status(400).json({ err: "User is already created" });
    }
    user = await User.create({ username, email, password });
    const token = user.createJWT();

    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
  }
};
const logIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Email or Password field is not correct or missing");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credential");
  }
  const isCorrectedPassword = await user.comparePassword(password);
  if (!isCorrectedPassword) {
    throw new Error("UN AUTHENTIC");
  }
  const token = user.createJWT();
  res.status(200).json({ token });
};
module.exports = { signUp, logIn };
