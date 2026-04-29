db.hostel.insertOne({
  student_id: "S001",
  name: "Ravi Kumar",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2026-04-01")
})
db.hostel.insertMany([
  { student_id: "S002", name: "Anita Sharma", room_number: 102, block_name: "B", bed_number: 2, check_in_date: new Date("2026-04-02") },
  { student_id: "S003", name: "Manish Verma", room_number: 103, block_name: "A", bed_number: 1, check_in_date: new Date("2026-03-30") },
  { student_id: "S004", name: "Sneha Patel", room_number: 104, block_name: "C", bed_number: 2, check_in_date: new Date("2026-03-28") },
  { student_id: "S005", name: "Karan Singh", room_number: 105, block_name: "A", bed_number: 2, check_in_date: new Date("2026-03-25") },
  { student_id: "S006", name: "Riya Mehta", room_number: 106, block_name: "B", bed_number: 1, check_in_date: new Date("2026-03-20") }
])
db.hostel.find({ block_name: "A" })
db.hostel.find({}, { _id: 0, name: 1, room_number: 1, block_name: 1 })
db.hostel.deleteOne({ student_id: "S005" })
