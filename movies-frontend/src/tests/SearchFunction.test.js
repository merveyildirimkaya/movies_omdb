import { SearchFunction } from "../utils/SearchFunction"
import { act, renderHook}  from '@testing-library/react-hooks'

it("isUserSearching functionality",()=>{
       const {result}=  renderHook (SearchFunction)

        act(()=>{
            result.current.handleSearch("for")
        })
        expect(result.current.isUserSearching).toBeTruthy();
})
it("isUserSearching functionality",async ()=>{
    const {result}= renderHook(SearchFunction)

    await act(async()=>{
         await result.current.handleSearch("for")
     })
     expect(result.current.movies).toHaveLength(5)
})
