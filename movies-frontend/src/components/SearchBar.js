import React,{useState} from 'react'

const SearchBar = (props) => {
    
    const [search, setSearch] = useState("");
  
    return (
        <div className="search-bar">
        <input className="input" data-testid="search-bar"
            type="text"
            placeholder="Title,Plot or Director"
            onChange={(event)=>{
                setSearch(event.target.value)
            }}
        />
        <div className="search-button" data-testid="search-button" onClick={()=>props.handleSearch(search)}>
            <div>
            Search
            </div>
        </div>
    </div>
    )
}

export default SearchBar
