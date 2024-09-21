const { validationResult } = require("express-validator");
const signUp = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;

  res.json({ username, email, password });
};
const logIn = (req, res) => {
  res.json({ msg: "Login" });
};
module.exports = { signUp, logIn };
