import { render} from "@testing-library/react";
import SearchBar from '../components/SearchBar'

describe("SearchBar Component", ()=>{
    it("search-bar is visible",()=>{
        const {getByTestId}= render(<SearchBar/>)
        const searchBar = getByTestId("search-bar")
        expect(searchBar).toBeTruthy();
    })
    it("search-button is visible",()=>{
        const {getByTestId}= render(<SearchBar/>)
        const button = getByTestId("search-button")
        expect(button).toBeTruthy();
    })
})