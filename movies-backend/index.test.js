const movieservice = require('./src/service/movie.service')
const omdbapi = require('./src/utils/OmdbApi')
const mongoDB = require('./src/utils/database/mongodb')


mongoDB.connectDatabase();



test("OMDBAPI Call Functionality",async()=>{
    let search = omdbapi.callMoviesFrom2001();
     search.then((result)=>{
        expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                Title: expect.any(String),
                Year: expect.any(String)
            })
        ])
    )})
})

test("Get Movies with Details Functionality", async()=>{
    let movie = omdbapi.callMoviesWithDetails("Race to Space");
    movie.then((result)=>{
        expect(result).toEqual(
                expect.objectContaining({
                    Title:expect.any(String),
                    Director: expect.any(String),
                    Plot: expect.any(String),
                    Poster: expect.any(String),
                })
        )
    })
})

test("Search Movies from Database Functionality", async()=>{
     let searchedMovies = movieservice.searchMovie("for")
     searchedMovies.then((result)=>{
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: expect.any(String),
                    director: expect.any(String),
                    plot: expect.any(String),
                    poster: expect.any(String),
                })
            ])
        )
     })
})


