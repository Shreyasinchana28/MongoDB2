db.wishlist.insertMany([
{
  wishlist_id: 1,
  customer_name: "Asha",
  product_name: "Headphones",
  product_category: "Electronics",
  price: 2500,
  added_date: new Date("2024-02-10"),
  notify_when_available: true
},
{
  wishlist_id: 2,
  customer_name: "Rahul",
  product_name: "Shoes",
  product_category: "Fashion",
  price: 1800,
  added_date: new Date("2023-12-15"),
  notify_when_available: true
},
{
  wishlist_id: 3,
  customer_name: "Sneha",
  product_name: "Smart Watch",
  product_category: "Electronics",
  price: 5000,
  added_date: new Date("2024-03-05"),
  notify_when_available: false
},
{
  wishlist_id: 4,
  customer_name: "Kiran",
  product_name: "Backpack",
  product_category: "Accessories",
  price: 1200,
  added_date: new Date("2023-11-20"),
  notify_when_available: true
},
{
  wishlist_id: 5,
  customer_name: "Meena",
  product_name: "Mobile Case",
  product_category: "Electronics",
  price: 800,
  added_date: new Date("2024-01-25"),
  notify_when_available: true
}
])
db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
})
db.wishlist.updateMany(
{ product_category: "Electronics" },
{
  $mul: { price: 0.8 }
}
)
db.wishlist.deleteMany({
  added_date: { $lt: new Date("2024-01-01") }
})
db.wishlist.aggregate([
{
  $group: {
    _id: "$customer_name",
    total_items: { $sum: 1 }
  }
}
])
