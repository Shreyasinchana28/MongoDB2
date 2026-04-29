db.contacts.insertOne({
  contact_id: "C001",
  first_name: "Amit",
  last_name: "Sharma",
  phone: "9876543210",
  email: "amit@example.com",
  city: "Delhi"
})
db.contacts.insertMany([
  { contact_id: "C002", first_name: "Priya", last_name: "Patel", phone: "9090909090", email: "priya@gmail.com", city: "Mumbai" },
  { contact_id: "C003", first_name: "Rahul", last_name: "Verma", phone: "8989898989", email: "rahul@gmail.com", city: "Chennai" },
  { contact_id: "C004", first_name: "Simran", last_name: "Kaur", phone: "8080808080", email: "simran@gmail.com", city: "Mumbai" },
  { contact_id: "C005", first_name: "John", last_name: "Doe", phone: "7070707070", email: "john@gmail.com", city: "Pune" },
  { contact_id: "C006", first_name: "Sneha", last_name: "Rao", phone: "6060606060", email: "sneha@gmail.com", city: "Bangalore" }
])
db.contacts.find({ city: "Mumbai" })
db.contacts.find({}, { _id: 0, first_name: 1, last_name: 1, phone: 1 })
db.contacts.deleteOne({ contact_id: "C003" })
