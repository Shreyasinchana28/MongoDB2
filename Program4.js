db.expenses.insertOne({
  expense_id: "E001",
  category: "Food",
  amount: 250,
  date: new Date("2026-04-28"),
  payment_method: "Cash",
  note: "Lunch at cafe"
})
db.expenses.insertMany([
  { expense_id: "E002", category: "Transport", amount: 800, date: new Date("2026-04-25"), payment_method: "Cash", note: "Taxi fare" },
  { expense_id: "E003", category: "Entertainment", amount: 1200, date: new Date("2026-04-15"), payment_method: "Card", note: "Movie tickets" },
  { expense_id: "E004", category: "Bills", amount: 3000, date: new Date("2026-04-18"), payment_method: "UPI", note: "Electricity bill" },
  { expense_id: "E005", category: "Food", amount: 600, date: new Date("2026-04-22"), payment_method: "Card", note: "Dinner" },
  { expense_id: "E006", category: "Transport", amount: 450, date: new Date("2026-04-26"), payment_method: "Cash", note: "Bus pass" }
])
db.expenses.find({ amount: { $gt: 500 } })
db.expenses.find({}, { _id: 0, category: 1, amount: 1, date: 1 })
db.expenses.deleteOne({ expense_id: "E006" })
