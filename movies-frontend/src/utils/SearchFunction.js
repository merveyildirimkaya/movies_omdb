import axios from 'axios'
import {useState} from 'react'
axios.defaults.adapter = require('axios/lib/adapters/http');

export const SearchFunction = ()=>{
  const [movies, setMovies] = useState([])
  const [isUserSearching, setIsUserSearching]= useState(false)
  
  const handleSearch= async (search)=>{
    setIsUserSearching(true);
    try{
    const resp= await axios.get(`http://localhost:3000/request/${search}`)
    if(resp.status !==200) throw "An error occured while getting movies";
        setMovies(resp.data);
        return search.data;
      }catch(err){
      console.log(err)
    }
  }
  return {movies,isUserSearching, handleSearch}
}