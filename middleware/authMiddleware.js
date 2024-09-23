const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authenticateUser = (req, res, next) => {
  //check for headers to find auth header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Error("Auth failed no token is provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (err) {
    throw new Error(`You got some problem: ${err}`);
  }
};
module.exports = authenticateUser;
