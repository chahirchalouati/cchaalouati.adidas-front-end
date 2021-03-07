import React from 'react'
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import RouterHistory from '../../../Routes/History';

function SearchBoxMobile({ isVisibleSearch,
    setVisibleSearch, }) {
    return (
        <div className="search_box_mobile">
            <IoPersonOutline
                style={{ cursor: 'pointer' }}
                className="icon_search"
                size={28}
                onClick={(e) => {
                    RouterHistory.push("/account-login");
                }}
            />
            <FiSearch onClick={(e) => { setVisibleSearch(pre => true) }} style={{ cursor: 'pointer' }} className="icon_search" size={28} />
            <FiShoppingCart style={{ cursor: 'pointer' }} className="icon_search" size={28} />
        </div>
    )
}

export default SearchBoxMobile
