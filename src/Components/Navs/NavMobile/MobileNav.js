import React from "react";
import BottomNavMobile from "./BottomNavMobile";
import CenterNavMobile from "./CenterNavMobile";
import TopNavMobile from "./TopNavMobile";

function MobileNav({ isVisibleMenu, setVisibleMenu, isVisibleSearch,
    setVisibleSearch }) {


    return (

        <div className="mobile_nav">

            <TopNavMobile text={"EXTRA 20% OFF SALE | USE CODE: EXTRA20"} />
            <CenterNavMobile
                isVisibleSearch={isVisibleSearch}
                setVisibleSearch={setVisibleSearch}
                isVisibleMenu={isVisibleMenu}
                setVisibleMenu={setVisibleMenu} />
            <BottomNavMobile />

        </div>

    );
}

export default MobileNav;
{
    /**  <div className="search_side_nav_mobile"></div> */
}
