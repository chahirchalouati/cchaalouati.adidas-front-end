import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function LinkButton({ text, to }) {
    return (
        <div className="link">
            <div className="link_text">{text}</div>
            <HiOutlineArrowNarrowRight
                size={25}
                className="link_icon"
            ></HiOutlineArrowNarrowRight>
        </div>
    )
}

export default LinkButton
