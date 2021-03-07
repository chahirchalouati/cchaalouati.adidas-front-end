import React, { useState } from "react";

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCloseSharp, IoPersonOutline } from "react-icons/io5";
import RouterHistory from "../../Routes/History";
import SearchResult from "../Searchs/SearchResult";

function NavSearchBox() {
    const [isEmpty, setisEmpty] = useState(false);
    const [inputValue, setinputValue] = useState("");
    const [bagIsEmpty, setbagIsEmpty] = useState(null);
    const [wishListIsEmpty, setwishListIsEmpty] = useState(null);
    const [searchResult, setsearchResult] = useState(null);
    const [ItemCount, setItemCount] = useState(0)



    return (
        <div className="search_box">
            <div className="input_box">
                <input
                    type="text"
                    name=""

                    placeholder="Search"
                    value={inputValue}
                    onChange={(e) => {
                        setisEmpty((prev) => e.target.value.length > 0);
                        setinputValue((prev) => e.target.value);
                        setsearchResult((prev) => true);
                    }}
                />

                {isEmpty ? (
                    <IoCloseSharp
                        className="icon_input_search"
                        size={25}
                        onClick={(e) => {
                            setisEmpty((prev) => !prev);
                            setinputValue((prev) => "");
                            setsearchResult((prev) => false);
                        }}
                    />
                ) : (
                        <FiSearch className="icon_input_search" size={25} />
                    )}
            </div>

            <span>
                <IoPersonOutline
                    className="icon_search"
                    size={25}
                    onClick={e => {
                        RouterHistory.push("/account-login")
                    }}

                />
                <HiOutlineHeart
                    className="icon_search"
                    size={25}
                    onMouseOver={(e) => {
                        setwishListIsEmpty((e) => true);
                    }}
                    onMouseLeave={(e) => {
                        setwishListIsEmpty((e) => false);
                    }}

                    onClick={e => {
                        RouterHistory.push("/wishlist")
                    }}

                />
                <FiShoppingCart
                    className="icon_search"
                    size={25}
                    onMouseOver={(e) => {
                        setbagIsEmpty((e) => true);
                    }}
                    onMouseLeave={(e) => {
                        setbagIsEmpty((e) => false);
                    }} onClick={e => {

                        ItemCount > 0 && RouterHistory.push("/cart")
                    }}
                />
            </span>
            {!searchResult &&

                <div className="search_box_modals">
                    {
                        <div className={bagIsEmpty ? "empty_bag show_emptyBag" : "empty_bag"}> YOUR BAG IS EMPTY</div>
                    }

                    {
                        <div className={wishListIsEmpty ? "empty_bag show_emptyBag" : "empty_bag"}>YOUR WISHLIST IS EMPTY</div>
                    }
                </div>

            }

            {
                searchResult && <SearchResult></SearchResult>
            }
        </div>
    );
}

export default NavSearchBox;
