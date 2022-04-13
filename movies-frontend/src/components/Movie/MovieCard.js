import React from 'react'
import { posterNotAvailable } from '../../utils/posterNotAvailable'

const MovieCard = (props) => {

      const urlForNotAvailablePosters ="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60";
      return (
        <div className="card movie-card" data-testid="movie-card" >
        {posterNotAvailable(props.poster) ?
          <img className="card-img-top poster"
          src={urlForNotAvailablePosters} alt="Card image cap"
          /> 
          :
          <img className="card-img-top poster"
          src={props.poster} alt="Card image cap"
          /> 
        }
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.director}</p>
          <p className="card-text" style={{wordWrap:"break-word"}}>{props.plot}</p>
        </div>
      </div>
    )
}

export default MovieCard
