db.prescriptions.insertMany([
  {prescription_id: 1, patient_name: "Amit", doctor_name: "Dr. Rao", medicine_name: "Paracetamol", dosage: "500mg", issue_date: new Date("2025-01-01"), expiry_date: new Date("2026-01-01"), status: "Active"},
  {prescription_id: 2, patient_name: "Sara", doctor_name: "Dr. Mehta", medicine_name: "Ibuprofen", dosage: "400mg", issue_date: new Date("2024-01-01"), expiry_date: new Date("2025-01-01"), status: "Expired"},
  {prescription_id: 3, patient_name: "John", doctor_name: "Dr. Khan", medicine_name: "Amoxicillin", dosage: "250mg", issue_date: new Date("2025-03-01"), expiry_date: new Date("2026-03-01"), status: "Active"},
  {prescription_id: 4, patient_name: "Priya", doctor_name: "Dr. Das", medicine_name: "Cetirizine", dosage: "10mg", issue_date: new Date("2023-01-01"), expiry_date: new Date("2024-01-01"), status: "Fulfilled"},
  {prescription_id: 5, patient_name: "Rahul", doctor_name: "Dr. Shah", medicine_name: "Metformin", dosage: "500mg", issue_date: new Date("2025-02-01"), expiry_date: new Date("2026-02-01"), status: "Active"}
]);
db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
});
db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
);
db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: new Date("2024-01-01") }
});
db.prescriptions.find(
  {},
  { patient_name: 1, medicine_name: 1, status: 1, _id: 0 }
).sort({ issue_date: -1 });
