db.giftcards.insertOne({
  card_id: "G001",
  recipient_name: "Asha Mehta",
  sender_name: "Ravi Sharma",
  amount: 1000,
  purchase_date: new Date("2026-04-10"),
  expiry_date: new Date("2026-12-31"),
  is_used: false
})
db.giftcards.insertMany([
  { card_id: "G002", recipient_name: "John Doe", sender_name: "Emma", amount: 2000, purchase_date: new Date("2026-01-15"), expiry_date: new Date("2026-06-30"), is_used: false },
  { card_id: "G003", recipient_name: "Neha Patel", sender_name: "Karan", amount: 1500, purchase_date: new Date("2026-02-20"), expiry_date: new Date("2026-10-10"), is_used: true },
  { card_id: "G004", recipient_name: "Rohit Sharma", sender_name: "Riya", amount: 2500, purchase_date: new Date("2026-03-10"), expiry_date: new Date("2026-12-20"), is_used: false },
  { card_id: "G005", recipient_name: "Simran Kaur", sender_name: "Tina", amount: 3000, purchase_date: new Date("2026-02-22"), expiry_date: new Date("2026-05-10"), is_used: false },
  { card_id: "G006", recipient_name: "Vikas Jain", sender_name: "Anita", amount: 500, purchase_date: new Date("2026-01-05"), expiry_date: new Date("2026-03-01"), is_used: true }
])
db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
})
db.giftcards.find({}, { _id: 0, recipient_name: 1, amount: 1, expiry_date: 1 })
db.giftcards.deleteOne({ card_id: "G006" })
