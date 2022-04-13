const movieservice = require('../service/movie.service')
const express = require("express")
const app= express()
app.use(express.json())

const searchMovie = async()=>{
    await app.get("/request/:search", async (req,res)=>{  
       const result = await movieservice.searchMovie(req.params.search);
       res.write(JSON.stringify(result))
       res.end();
    }).listen(3000);
}
module.exports.searchMovie = searchMovie;
