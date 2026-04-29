db.bookings.insertMany([
    {
        booking_id: "BK001",
        passenger_name: "John Smith",
        flight_number: "SW101",
        origin: "Delhi",
        destination: "Mumbai",
        departure_date: new Date("2025-06-15"),
        arrival_date: new Date("2025-06-15"),
        seat_class: "Economy",
        fare_amount: 5500,
        baggage_allowance: 15,
        booking_status: "Confirmed"
    },
    {
        booking_id: "BK002",
        passenger_name: "Emma Wilson",
        flight_number: "SW202",
        origin: "Mumbai",
        destination: "London",
        departure_date: new Date("2025-07-10"),
        arrival_date: new Date("2025-07-11"),
        seat_class: "Business",
        fare_amount: 85000,
        baggage_allowance: 30,
        booking_status: "Confirmed"
    },
    {
        booking_id: "BK003",
        passenger_name: "Raj Malhotra",
        flight_number: "SW303",
        origin: "Chennai",
        destination: "Singapore",
        departure_date: new Date("2025-02-20"),
        arrival_date: new Date("2025-02-20"),
        seat_class: "First",
        fare_amount: 120000,
        baggage_allowance: 40,
        booking_status: "Cancelled"
    },
    {
        booking_id: "BK004",
        passenger_name: "Sarah Johnson",
        flight_number: "SW101",
        origin: "Delhi",
        destination: "Mumbai",
        departure_date: new Date("2025-06-15"),
        arrival_date: new Date("2025-06-15"),
        seat_class: "Business",
        fare_amount: 12000,
        baggage_allowance: 30,
        booking_status: "Confirmed"
    },
    {
        booking_id: "BK005",
        passenger_name: "Ankit Verma",
        flight_number: "SW404",
        origin: "Bangalore",
        destination: "Dubai",
        departure_date: new Date("2025-08-05"),
        arrival_date: new Date("2025-08-05"),
        seat_class: "Economy",
        fare_amount: 25000,
        baggage_allowance: 15,
        booking_status: "Waitlist"
    }
])
db.bookings.aggregate([
    {
        $group: {
            _id: "$destination",
            total_fare: { $sum: "$fare_amount" }
        }
    },
    {
        $sort: { total_fare: -1 }
    }
])
db.bookings.updateMany(
    { seat_class: "Business" },
    { $set: { meal_preference_required: true } }
)
db.bookings.deleteMany({
    booking_status: "Cancelled",
    departure_date: { $lt: new Date("2025-03-01") }
})
db.bookings.aggregate([
    {
        $match: { booking_status: "Confirmed" }
    },
    {
        $group: {
            _id: "$seat_class",
            average_fare: { $avg: "$fare_amount" }
        }
    }
])
