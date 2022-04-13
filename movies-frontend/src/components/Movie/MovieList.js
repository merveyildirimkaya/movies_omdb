import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {

    const movies = props.movies
    const isUserSearching = props.isUserSearching

    if(movies.length===0 && isUserSearching ) return <div data-testid="movie-not-found-div" className="notFound">Movie not found</div>
    return (
        <div className="container-fluid">
        <div className="row"  >
            {movies.map((movie,index)=>(
                <MovieCard 
                key={index}
                poster={movie.poster}
                title={movie.title}
                director={movie.director}
                plot={movie.plot}
                /> 
                )
            )}
        </div>
        </div>
    )
}

export default MovieList

