db.products.insertMany([
{
  product_id: 1,
  product_name: "Laptop",
  category: "Electronics",
  quantity_in_stock: 10,
  reorder_level: 15,
  supplier_name: "ABC Corp",
  last_restock_date: new Date("2023-02-01"),
  storage_location: "A1"
},
{
  product_id: 2,
  product_name: "Chair",
  category: "Furniture",
  quantity_in_stock: 50,
  reorder_level: 20,
  supplier_name: "XYZ Ltd",
  last_restock_date: new Date("2021-05-01"),
  storage_location: "B1"
},
{
  product_id: 3,
  product_name: "Phone",
  category: "Electronics",
  quantity_in_stock: 5,
  reorder_level: 10,
  supplier_name: "ABC Corp",
  last_restock_date: new Date("2023-06-01"),
  storage_location: "A2"
},
{
  product_id: 4,
  product_name: "Table",
  category: "Furniture",
  quantity_in_stock: 0,
  reorder_level: 5,
  supplier_name: "ABC Corp",
  last_restock_date: new Date("2020-01-01"),
  storage_location: "B2"
},
{
  product_id: 5,
  product_name: "Pen",
  category: "Stationery",
  quantity_in_stock: 100,
  reorder_level: 50,
  supplier_name: "Local",
  last_restock_date: new Date("2024-01-01"),
  storage_location: "C1"
}
])
db.products.find({
  $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] }
})
db.products.updateMany(
{ supplier_name: "ABC Corp" },
{ $inc: { quantity_in_stock: 100 } }
)
db.products.deleteMany({
  last_restock_date: { $lt: new Date("2022-01-01") },
  quantity_in_stock: 0
})
db.products.createIndex({ category: 1, quantity_in_stock: 1 })
