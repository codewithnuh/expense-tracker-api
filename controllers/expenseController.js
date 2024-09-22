const getAllExpenses = async (req, res) => {
  res.json("Get all expenses");
};
const getExpense = async (req, res) => {
  res.json("get expense");
};
const createExpense = async (req, res) => {
  res.json("Create Expense");
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
