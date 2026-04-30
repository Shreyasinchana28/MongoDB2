db.itineraries.insertMany([
{
  itinerary_id: 1,
  customer_name: "Asha",
  destination: "Manali",
  trip_start_date: new Date("2026-06-01"),
  trip_end_date: new Date("2026-06-07"),
  budget: 60000,
  activities: ["Trekking", "Sightseeing"],
  hotel_name: "Snow View",
  booking_status: "Confirmed"
},
{
  itinerary_id: 2,
  customer_name: "Rahul",
  destination: "Goa",
  trip_start_date: new Date("2025-12-10"),
  trip_end_date: new Date("2025-12-15"),
  budget: 40000,
  activities: ["Beach", "Party"],
  hotel_name: "Sea Breeze",
  booking_status: "Pending"
},
{
  itinerary_id: 3,
  customer_name: "Sneha",
  destination: "Kerala",
  trip_start_date: new Date("2026-01-05"),
  trip_end_date: new Date("2026-01-10"),
  budget: 70000,
  activities: ["Boating", "Trekking"],
  hotel_name: "Green Resort",
  booking_status: "Confirmed"
},
{
  itinerary_id: 4,
  customer_name: "Kiran",
  destination: "Delhi",
  trip_start_date: new Date("2023-05-01"),
  trip_end_date: new Date("2023-05-05"),
  budget: 30000,
  activities: ["Shopping"],
  hotel_name: "City Inn",
  booking_status: "Pending"
},
{
  itinerary_id: 5,
  customer_name: "Meena",
  destination: "Shimla",
  trip_start_date: new Date("2022-03-01"),
  trip_end_date: new Date("2022-03-06"),
  budget: 55000,
  activities: ["Trekking", "Camping"],
  hotel_name: "Hill Stay",
  booking_status: "Cancelled"
}
])
db.itineraries.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
})
db.itineraries.updateMany(
{ trip_start_date: { $lt: new Date() } },
{ $set: { booking_status: "Cancelled" } }
)
db.itineraries.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: new Date("2024-01-01") }
})
db.itineraries.find({
  activities: "Trekking"
})
