const axios = require('axios')

const _MOVIE_URL = 'http://www.omdbapi.com/?apikey=79150d2a&s=space&y=2001&type=movie'
const _MOVIE_URI = 'http://www.omdbapi.com/?apikey=79150d2a&t='

const callMoviesFrom2001 = async ()=>{
    const response = await axios.get(_MOVIE_URL);
    return response.data.Search;
}

const callMoviesWithDetails = async (movieTitle)=>{

     const resp = await axios.get(`${_MOVIE_URI}${movieTitle}`)
     return resp.data;
}

module.exports.callMoviesFrom2001 = callMoviesFrom2001;
module.exports.callMoviesWithDetails = callMoviesWithDetails;