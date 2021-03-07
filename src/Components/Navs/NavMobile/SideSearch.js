import React, { useState } from 'react';
import { GrClose, IoIosArrowBack } from 'react-icons/all';
import Loading from '../../Loading/Loading';

function SideSearch({ isVisibleSearch, setVisibleSearch }) {
    const [inputValue, setinputValue] = useState("");
    const [foundResult, setFoundResult] = useState(false);



    const classAnimation = isVisibleSearch
        ? 'side__search__nav__mobile  show__search'
        : 'side__search__nav__mobile  hide__search';

    return (
        <div className={classAnimation}>
            <div className="side__search__nav__mobile__header">
                <IoIosArrowBack stye={{ cursor: 'pointer' }} onClick={e => { setVisibleSearch(prev => false) }} size={25} />
                <input
                    type="text"
                    placeholder="Search"
                    className='input_search_nav_mobile'
                    value={inputValue}
                    onChange={e => {
                        setinputValue(e.target.value);

                        setTimeout(() => {
                            setinputValue("");
                            setFoundResult(prev => true);
                        }, 3000);

                    }}
                />

                {inputValue.length > 0 && <GrClose style={{ right: "1%" }} stye={{ cursor: 'pointer' }} onClick={e => { setinputValue(prev => "") }} size={25} />}


            </div>
            {inputValue.length > 0 && <div className="welcome_loading"><Loading></Loading></div>}

            {foundResult && <h2 className="welcome_loading">No Result Found</h2>}
        </div>
    )
}

export default SideSearch
