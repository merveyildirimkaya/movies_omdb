import { render } from "@testing-library/react";
import MovieList from "../components/Movie/MovieList"

const movies =[
    {
    "_id": "62547d6fd20017421c4ab15b",
    "title": "Space Zoo",
    "director": "Werner Kranwetvogel",
    "plot": "2030. A push at the wrong button on the hyper space module has unexpected conse-quences for the two astronauts Franz Daxenberger and Dirk Mandelbrot. They find themselves on Aldebaran 9, a ...",
    "poster": "N/A",
    "__v": 0
    },
    {
    "_id": "62547d6fd20017421c4ab165",
    "title": "Gore from Outer Space",
    "director": "Hirohisa Sasaki",
    "plot": "A woman is sent to execution for the murder of her daughter, who she believes is kidnapped. When she tells her story to a nun, we learn her story through a series of encounters with a psychic, a dirty politician, and two FBI agents w",
    "poster": "https://m.media-amazon.com/images/M/MV5BNTk2Nzg3NDEtMjQ4NC00Nzk4LWE0YmYtZTdmODYzYjIxOTljXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg",
    "__v": 0
    }
    ]

describe("MovieList Component", ()=>{
    it("movie-not-found",()=>{
        const {getByTestId} = render(<MovieList movies={[]} isUserSearching={true}/>)
        const movieNotFoundDiv = getByTestId("movie-not-found-div")
        expect(movieNotFoundDiv).toBeTruthy();
    })
    it("movie-found",()=>{
      const {queryByTestId} = render(<MovieList movies={[]} isUserSearching={false}/>)
      const movieNotFoundDiv = queryByTestId("movie-not-found-div")
      expect(movieNotFoundDiv).toBeFalsy();
    })
    it("how many Movie Cards in Movie List",()=>{
        const {queryAllByTestId} =render(<MovieList movies={[]} isUserSearching={false}/>)
        const movieCards = queryAllByTestId("movie-card")
        expect(movieCards).toHaveLength(0)
    })
    it("how many Movie Cards in Movie List",()=>{
        const {queryAllByTestId} =render(<MovieList movies={[]} isUserSearching={true}/>)
        const movieCards = queryAllByTestId("movie-card")
        expect(movieCards).toHaveLength(0)
    })
    it("how many Movie Cards in Movie List",()=>{
        const {getAllByTestId} =render(<MovieList movies={movies} isUserSearching={true}/>)
        const movieCards = getAllByTestId("movie-card")
        expect(movieCards).toHaveLength(2)
    })
  
})