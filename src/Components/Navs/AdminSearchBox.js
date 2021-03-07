import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

function AdminSearchBox() {
    const [isEmpty, setisEmpty] = useState(false);
    const [inputValue, setinputValue] = useState("");
    return (
        <div className="search_box">
            <input type="text" name='' placeholder="Search" value={inputValue}
                onChange={(e) => {
                    setisEmpty((prev) => e.target.value.length > 0);
                    setinputValue((prev) => e.target.value);

                }} />
            {isEmpty ? (
                <IoCloseSharp
                    className="icon_input_search"
                    size={25}
                    onClick={(e) => {
                        setisEmpty((prev) => !prev);
                        setinputValue((prev) => "");

                    }}
                />
            ) : (
                    <FiSearch className="icon_input_search" size={25} />
                )}


        </div>
    )
}

export default AdminSearchBox
