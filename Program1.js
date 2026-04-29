db.menu.insertOne({
  item_id: "I001",
  name: "Espresso",
  category: "Coffee",
  price: 150,
  availability: true
})
db.menu.insertMany([
  { item_id: "I002", name: "Cappuccino", category: "Coffee", price: 180, availability: true },
  { item_id: "I003", name: "Green Tea", category: "Tea", price: 120, availability: true },
  { item_id: "I004", name: "Chocolate Muffin", category: "Snack", price: 90, availability: false },
  { item_id: "I005", name: "Masala Tea", category: "Tea", price: 100, availability: true },
  { item_id: "I006", name: "Croissant", category: "Snack", price: 110, availability: true }
])
db.menu.find({ availability: true })
db.menu.find({}, { _id: 0, name: 1, price: 1 })
db.menu.deleteOne({ item_id: "I004" })
