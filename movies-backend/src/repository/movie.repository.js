const express = require("express")
const app= express()
app.use(express.json())
const movieSchema = require('../schema/movie.schema')

const getMovies = async(search)=>{
   const result = await movieSchema.find({
      $or : [
         {"director" : {  $regex : search}},
         {"title" : {  $regex : search}},
         {"plot" : {  $regex : search}}
         ]
      })
      return result;
}   
module.exports.getMovies = getMovies;
