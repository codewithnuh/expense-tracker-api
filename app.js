const express = require("express");
const auth = require("./routes/authRoutes");
const connectDB = require("./config/db");
const expensesRoutes = require("./routes/expenseRoutes");
const notFound = require("./middleware/not-found");
const app = express();
app.use(express.json());
app.use("/api/v1/auth/", auth);
app.use("/api/v1/expenses/", expensesRoutes);
require("dotenv").config();
app.use(notFound);
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
  console.log(`The server is listening on the http://localhost:${PORT}`);
});
