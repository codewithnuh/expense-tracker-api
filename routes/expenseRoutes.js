const express = require("express");
const {
  getAllExpenses,
  createExpense,
  getExpense,
  updateExpense,
} = require("../controllers/expenseController");
const router = express.Router();
router.route("/").get(getAllExpenses).post(createExpense);
router.route("/:id").get(getExpense).patch(updateExpense);
router.get("/", getAllExpenses);
module.exports = router;
