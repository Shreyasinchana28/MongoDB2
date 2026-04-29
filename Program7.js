db.parking.insertOne({
  slot_id: "P001",
  floor: 1,
  vehicle_type: "Car",
  is_occupied: false,
  vehicle_number: null
})
db.parking.insertMany([
  { slot_id: "P002", floor: 1, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: "P003", floor: 2, vehicle_type: "Car", is_occupied: true, vehicle_number: "DL01AB1234" },
  { slot_id: "P004", floor: 2, vehicle_type: "Bike", is_occupied: true, vehicle_number: "MH12CD5678" },
  { slot_id: "P005", floor: 3, vehicle_type: "Car", is_occupied: false, vehicle_number: null },
  { slot_id: "P006", floor: 3, vehicle_type: "Bike", is_occupied: false, vehicle_number: null }
])
db.parking.find({ is_occupied: false })
db.parking.find({}, { _id: 0, slot_id: 1, floor: 1, vehicle_type: 1 })
db.parking.deleteOne({ slot_id: "P005" })
