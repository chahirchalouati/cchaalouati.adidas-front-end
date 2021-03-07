import React from 'react'
import SearchResultItem from './SearchResultItem'

function SearchResult() {
    return (
        <div className=" box_search_result ">
            <SearchResultItem placeholder={"Suggestions"} ></SearchResultItem>
            <SearchResultItem placeholder={"products"} ></SearchResultItem>

        </div>
    )
}

export default SearchResult
