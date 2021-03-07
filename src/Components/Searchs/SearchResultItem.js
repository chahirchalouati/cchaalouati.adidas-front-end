import React from 'react'

function SearchResultItem({ placeholder, onclick }) {
    return (
        <div className="box_search_result_items">
            <div className="box_search_result_items_header">{placeholder}</div>
            <div className="box_search_result_items_body">
            </div>
        </div>
    )
}

export default SearchResultItem
