const Expense = require("../models/Expense");
const getAllExpenses = async (req, res) => {
  res.json("Get all expenses");
};
const getExpense = async (req, res) => {
  res.json("get expense");
};
const createExpense = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req.body);
  const expense = await Expense.create({ ...req.body });
  res.status(201).json({ expense });
};
const deleteExpense = async (req, res) => {
  res.json("Delete Expense");
};
const updateExpense = async (req, res) => {
  res.json("Update expense");
};

module.exports = {
  getAllExpenses,
  getExpense,
  createExpense,
  deleteExpense,
  updateExpense,
};
