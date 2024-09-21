const express = require("express");
const auth = require("./routes/authRoutes");
const app = express();
app.use(express.json());
app.use("/api/v1/auth/", auth);
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is listening on the http://localhost:${PORT}`);
});
