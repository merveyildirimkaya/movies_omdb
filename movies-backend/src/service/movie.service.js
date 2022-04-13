const movieRepository = require('../repository/movie.repository')

const searchMovie = async(search)=>{
    const arr =  movieRepository.getMovies(search);
    arr.then((resp)=>{
        if(resp.length===0) console.log("No movie found");
        else return resp
    })
    return arr;
}

module.exports.searchMovie = searchMovie;