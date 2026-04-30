db.parcels.insertOne({
  parcel_id: "PR001",
  sender_name: "Ravi Sharma",
  receiver_name: "Neha Patel",
  weight: 2.5,
  shipping_cost: 300,
  booking_date: new Date("2026-04-20"),
  delivery_status: "Pending"
})
db.parcels.insertMany([
  { parcel_id: "PR002", sender_name: "Amit Verma", receiver_name: "Pooja Singh", weight: 1.2, shipping_cost: 200, booking_date: new Date("2026-04-10"), delivery_status: "Shipped" },
  { parcel_id: "PR003", sender_name: "Rahul Gupta", receiver_name: "Anita Rao", weight: 3.8, shipping_cost: 500, booking_date: new Date("2026-04-12"), delivery_status: "Delivered" },
  { parcel_id: "PR004", sender_name: "John Doe", receiver_name: "Simran Kaur", weight: 2.0, shipping_cost: 350, booking_date: new Date("2026-04-25"), delivery_status: "Pending" },
  { parcel_id: "PR005", sender_name: "Karan Singh", receiver_name: "Ravi Mehta", weight: 4.0, shipping_cost: 700, booking_date: new Date("2026-04-15"), delivery_status: "Pending" },
  { parcel_id: "PR006", sender_name: "Ajay Kumar", receiver_name: "Manish Sharma", weight: 1.8, shipping_cost: 250, booking_date: new Date("2026-04-18"), delivery_status: "Delivered" }
])
db.parcels.find({ delivery_status: "Pending" })
db.parcels.find({}, { _id: 0, sender_name: 1, receiver_name: 1, shipping_cost: 1 })
db.parcels.deleteOne({ parcel_id: "PR002" })
