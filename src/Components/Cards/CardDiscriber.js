import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import RouterHistory from "../../Routes/History";

function CardDiscriber({ title, linkTo, linkText, decription, imgUrl }) {
    return (
        <div className="card_describer">
            <img src={imgUrl} alt="" />

            <span className='ds_details' style={{ lineHeight: '1.8em' }}>
                <div className="title">{title}</div>
                <p className="description">{decription}</p>
                <div className="link" onClick={e => {
                    RouterHistory.push("/" + linkTo)
                }}>{linkText}
                    <HiOutlineArrowNarrowRight
                        size={20}
                        className="link_icon"
                    ></HiOutlineArrowNarrowRight></div>
            </span>

        </div>
    );
}

export default CardDiscriber;
