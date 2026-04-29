db.watchlist.insertOne({
  movie_id: "M001",
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
})
db.watchlist.insertMany([
  { movie_id: "M002", title: "The Dark Knight", genre: "Action", release_year: 2008, imdb_rating: 9.0, watched: true },
  { movie_id: "M003", title: "Parasite", genre: "Drama", release_year: 2019, imdb_rating: 8.6, watched: false },
  { movie_id: "M004", title: "Coco", genre: "Animation", release_year: 2017, imdb_rating: 8.4, watched: true },
  { movie_id: "M005", title: "Tenet", genre: "Sci-Fi", release_year: 2020, imdb_rating: 7.5, watched: false },
  { movie_id: "M006", title: "Joker", genre: "Thriller", release_year: 2019, imdb_rating: 8.4, watched: true }
])
db.watchlist.find({ watched: false })
db.watchlist.find({}, { _id: 0, title: 1, genre: 1, imdb_rating: 1 })
db.watchlist.deleteOne({ movie_id: "M003" })
