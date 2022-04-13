const api = require('./src/utils/omdbApi')
const mongoDB= require('./src/utils/database/mongodb')
const movieController = require('./src/controller/movie.controller');

mongoDB.connectDatabase();

let search = api.callMoviesFrom2001();
search.then((result)=>{
    mongoDB.loadToDatabase(result)
})

movieController.searchMovie();

