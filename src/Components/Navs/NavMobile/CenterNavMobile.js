import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';
import RouterHistory from '../../../Routes/History';
import Logo from '../../Logo/Logo';
import SearchBoxMobile from './SearchBoxMobile';

function CenterNavMobile({
    isVisibleMenu,
    setVisibleMenu,
    isVisibleSearch,
    setVisibleSearch,
}) {
    return (
        <div className="center_nav_mobile">
            <div className="menu_box_mobile">
                <BiMenu
                    style={{ cursor: "pointer" }}
                    size={28}
                    onClick={(e) => {
                        setVisibleMenu(true);
                    }}
                />
                <HiOutlineHeart
                    onClick={(e) => RouterHistory.push("/wishlist")}
                    style={{ cursor: "pointer" }}
                    size={28}
                />
            </div>
            <Logo />
            <SearchBoxMobile
                isVisibleSearch={isVisibleSearch}
                setVisibleSearch={setVisibleSearch}
            />
        </div>
    );
}

export default CenterNavMobile
