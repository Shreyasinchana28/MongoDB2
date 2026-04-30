db.polls.insertMany([
  {poll_id: 1, question: "Fav color?", options: ["Red","Blue"], votes: [10,20], created_date: new Date(), end_date: new Date("2026-06-01"), is_active: true},
  {poll_id: 2, question: "Best sport?", options: ["Cricket","Football","Tennis"], votes: [30,25,10], created_date: new Date(), end_date: new Date("2026-05-01"), is_active: true},
  {poll_id: 3, question: "Food?", options: ["Pizza","Burger","Pasta","Salad"], votes: [15,20,10,5], created_date: new Date(), end_date: new Date("2025-01-01"), is_active: false},
  {poll_id: 4, question: "Drink?", options: ["Tea","Coffee"], votes: [40,35], created_date: new Date(), end_date: new Date("2026-07-01"), is_active: true},
  {poll_id: 5, question: "Travel?", options: ["Beach","Mountains","City"], votes: [20,30,25], created_date: new Date(), end_date: new Date("2024-01-01"), is_active: false}
]);
db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
});
db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);
db.polls.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_active: false
});
db.polls.find({
  options: { $exists: true },
  $expr: { $gt: [{ $size: "$options" }, 3] }
});
