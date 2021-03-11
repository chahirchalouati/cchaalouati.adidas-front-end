import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

function TableSearch({ setData, resetSearch }) {
    const [isEmpty, setisEmpty] = useState(false);
    const [inputValue, setinputValue] = useState("");




    return (
        <div className="table_Search_box">
            <input type="text" name='' placeholder="Search" value={inputValue}
                onChange={(e) => {
                    setisEmpty((prev) => e.target.value.length > 0);
                    setinputValue((prev) => e.target.value);
                    isEmpty && setData(e.target.value);

                }} />
            {isEmpty ? (
                <IoCloseSharp
                    className="icon_input_search"
                    size={20}
                    onClick={(e) => {
                        setisEmpty((prev) => !prev);
                        setinputValue((prev) => "");
                        setData("")
                    }}
                />
            ) : (
                <FiSearch className="icon_input_search" size={25} />
            )}


        </div>
    )
}

export default TableSearch
