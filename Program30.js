db.defects.insertMany([
{
  defect_id: 1,
  product_name: "Phone",
  batch_number: "B1",
  defect_type: "Functional",
  detection_date: new Date("2024-01-01"),
  severity: "High",
  quantity_affected: 50,
  root_cause: "Battery issue",
  status: "Open",
  resolution_date: null
},
{
  defect_id: 2,
  product_name: "TV",
  batch_number: "B2",
  defect_type: "Cosmetic",
  detection_date: new Date("2021-01-01"),
  severity: "Low",
  quantity_affected: 10,
  root_cause: "Scratch",
  status: "Resolved",
  resolution_date: new Date("2021-02-01")
},
{
  defect_id: 3,
  product_name: "Laptop",
  batch_number: "B3",
  defect_type: "Safety",
  detection_date: new Date("2024-02-01"),
  severity: "High",
  quantity_affected: 20,
  root_cause: "Overheating",
  status: "Open",
  resolution_date: null
},
{
  defect_id: 4,
  product_name: "Tablet",
  batch_number: "B4",
  defect_type: "Functional",
  detection_date: new Date("2020-01-01"),
  severity: "Medium",
  quantity_affected: 5,
  root_cause: "Screen issue",
  status: "Resolved",
  resolution_date: new Date("2020-02-01")
},
{
  defect_id: 5,
  product_name: "Watch",
  batch_number: "B5",
  defect_type: "Cosmetic",
  detection_date: new Date("2024-03-01"),
  severity: "Low",
  quantity_affected: 15,
  root_cause: "Color fade",
  status: "Investigating",
  resolution_date: null
}
])
db.defects.find({
  severity: "High",
  status: "Open"
})
db.defects.updateMany(
{ root_cause: { $ne: null } },
{
  $set: {
    status: "Resolved",
    resolution_date: new Date()
  }
}
)
db.defects.deleteMany({
  detection_date: { $lt: new Date("2022-01-01") },
  status: "Resolved"
})
db.defects.aggregate([
{
  $group: {
    _id: "$defect_type",
    total_quantity: { $sum: "$quantity_affected" }
  }
},
{ $sort: { total_quantity: -1 } }
])
