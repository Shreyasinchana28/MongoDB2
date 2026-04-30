db.playlists.insertMany([
{
  playlist_id: 1,
  user_name: "Asha",
  playlist_name: "Hits",
  songs: [{title:"Song1", artist:"Artist1"}],
  created_date: new Date("2024-01-01"),
  total_duration_minutes: 60,
  is_public: true,
  play_count: 150
},
{
  playlist_id: 2,
  user_name: "Rahul",
  playlist_name: "Chill",
  songs: [{title:"Song2", artist:"Artist2"}],
  created_date: new Date("2022-01-01"),
  total_duration_minutes: 45,
  is_public: false,
  play_count: 50
},
{
  playlist_id: 3,
  user_name: "Sneha",
  playlist_name: "Workout",
  songs: [{title:"Song3", artist:"Artist3"}],
  created_date: new Date("2023-05-01"),
  total_duration_minutes: 30,
  is_public: true,
  play_count: 200
},
{
  playlist_id: 4,
  user_name: "Kiran",
  playlist_name: "Party",
  songs: [{title:"Song4", artist:"Artist4"}],
  created_date: new Date("2021-01-01"),
  total_duration_minutes: 90,
  is_public: false,
  play_count: 20
},
{
  playlist_id: 5,
  user_name: "Meena",
  playlist_name: "Relax",
  songs: [{title:"Song5", artist:"Artist5"}],
  created_date: new Date("2024-02-01"),
  total_duration_minutes: 70,
  is_public: true,
  play_count: 120
}
])
db.playlists.find({
  is_public: true,
  play_count: { $gt: 100 }
})
db.playlists.updateOne(
{ playlist_id: 1 },
{ $inc: { play_count: 1 } }
)
db.playlists.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_public: false
})
db.playlists.aggregate([
{
  $group: {
    _id: "$user_name",
    avg_duration: { $avg: "$total_duration_minutes" }
  }
}
])
