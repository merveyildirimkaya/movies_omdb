const mongoose = require("mongoose")
const movieSchema =require('../../schema/movie.schema')
const api = require('../omdbApi')


const connectDatabase = async()=>{ 
    return await mongoose.connect("mongodb://localhost:27017/mydatabase",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }, (err)=>{
           if(!err)  return true
           else{
               return false
        }
    })
}

const loadDatatoDatabase =async(data)=>{  
    await movieSchema.deleteMany({})
    data.map(async (movie)=>{
        const resp = api.callMoviesWithDetails(movie.Title)
        resp.then(async(mov)=>{
        const data = new movieSchema({
            title:mov.Title,
            director:mov.Director,
            plot:mov.Plot,
            poster:mov.Poster
        })
        await data.save();
        return data;
        })
    })
}


module.exports.connectDatabase = connectDatabase;
module.exports.loadToDatabase = loadDatatoDatabase;
