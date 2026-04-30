db.feedback.insertMany([
{
  feedback_id: 1,
  guest_name: "Asha",
  hotel_name: "Grand Hotel",
  room_number: 101,
  stay_dates: "2024-01-01 to 2024-01-03",
  cleanliness_rating: 5,
  service_rating: 5,
  overall_rating: 5,
  comments: "Excellent",
  feedback_date: new Date("2024-01-05"),
  would_recommend: true
},
{
  feedback_id: 2,
  guest_name: "Rahul",
  hotel_name: "City Inn",
  room_number: 102,
  stay_dates: "2022-01-01 to 2022-01-03",
  cleanliness_rating: 2,
  service_rating: 2,
  overall_rating: 2,
  comments: "Poor",
  feedback_date: new Date("2022-01-05"),
  would_recommend: false
},
{
  feedback_id: 3,
  guest_name: "Sneha",
  hotel_name: "Grand Hotel",
  room_number: 103,
  stay_dates: "2024-02-01 to 2024-02-03",
  cleanliness_rating: 4,
  service_rating: 4,
  overall_rating: 4,
  comments: "Good",
  feedback_date: new Date("2024-02-05"),
  would_recommend: true
},
{
  feedback_id: 4,
  guest_name: "Kiran",
  hotel_name: "Sea View",
  room_number: 104,
  stay_dates: "2023-01-01 to 2023-01-03",
  cleanliness_rating: 1,
  service_rating: 1,
  overall_rating: 1,
  comments: "Very Bad",
  feedback_date: new Date("2023-01-05"),
  would_recommend: false
},
{
  feedback_id: 5,
  guest_name: "Meena",
  hotel_name: "City Inn",
  room_number: 105,
  stay_dates: "2024-03-01 to 2024-03-03",
  cleanliness_rating: 5,
  service_rating: 4,
  overall_rating: 5,
  comments: "Nice",
  feedback_date: new Date("2024-03-05"),
  would_recommend: true
}
])
db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
})
db.feedback.updateMany(
{ overall_rating: { $gt: 4 } },
{ $set: { would_recommend: true } }
)
db.feedback.deleteMany({
  feedback_date: { $lt: new Date("2023-01-01") },
  overall_rating: 1
})
db.feedback.aggregate([
{
  $group: {
    _id: "$hotel_name",
    avg_cleanliness: { $avg: "$cleanliness_rating" },
    avg_service: { $avg: "$service_rating" }
  }
}
])
