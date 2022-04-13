import './App.css';
import React from 'react'
import MovieList from './components/Movie/MovieList';
import SearchBar from './components/SearchBar';
import {SearchFunction} from './utils/SearchFunction'

function App() {

  const  {movies,isUserSearching, handleSearch}= SearchFunction();
  
  return (
    <div className="window" data-testid="app">
    <SearchBar handleSearch={handleSearch}/>
    <MovieList movies={movies} isUserSearching={isUserSearching}/>
    </div> 
  );
}

export default App;
