db.attendance.insertMany([
  {record_id: 1, emp_name: "Amit", department: "IT", date: new Date(), status: "Absent", check_in_time: null},
  {record_id: 2, emp_name: "Sara", department: "HR", date: new Date(), status: "Present", check_in_time: "09:00"},
  {record_id: 3, emp_name: "John", department: "IT", date: new Date(), status: "Absent", check_in_time: null},
  {record_id: 4, emp_name: "Priya", department: "Finance", date: new Date(), status: "Leave", check_in_time: null},
  {record_id: 5, emp_name: "Rahul", department: "IT", date: new Date(), status: "Present", check_in_time: "09:30"}
]);
db.attendance.find({
  status: "Absent",
  department: "IT"
});
db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);
db.attendance.deleteMany({
  date: { $lt: new Date("2024-01-01") },
  status: "Leave"
});
db.attendance.find({ status: "Present" }).sort({ date: 1 });
