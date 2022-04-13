const mongoose = require("mongoose")


const movieSchema= mongoose.Schema({
    title: String,
    director: String,
    plot: String,
    poster: String,
})

module.exports = mongoose.model("MOVIECOLLECTION",movieSchema)

