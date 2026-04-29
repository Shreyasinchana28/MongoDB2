db.tasks.insertOne({
  task_id: "T001",
  title: "Buy groceries",
  description: "Purchase vegetables and fruits",
  due_date: new Date("2026-05-05"),
  priority: "High",
  is_completed: false
})
db.tasks.insertMany([
  { task_id: "T002", title: "Submit report", description: "Monthly finance report", due_date: new Date("2026-05-10"), priority: "Medium", is_completed: false },
  { task_id: "T003", title: "Call plumber", description: "Fix the kitchen sink", due_date: new Date("2026-05-01"), priority: "Low", is_completed: true },
  { task_id: "T004", title: "Gym session", description: "Attend daily evening workout", due_date: new Date("2026-05-02"), priority: "High", is_completed: false },
  { task_id: "T005", title: "Pay electricity bill", description: "Via UPI", due_date: new Date("2026-05-04"), priority: "Medium", is_completed: false },
  { task_id: "T006", title: "Book doctor appointment", description: "Annual health checkup", due_date: new Date("2026-05-06"), priority: "High", is_completed: true }
])
db.tasks.find({ is_completed: false })
db.tasks.find({}, { _id: 0, title: 1, due_date: 1 })
db.tasks.deleteOne({ task_id: "T003" })
