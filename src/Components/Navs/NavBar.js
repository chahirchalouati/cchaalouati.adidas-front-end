import React, { useEffect, useState } from "react";
import BottomNav from "./NavBottom";
import CenterNav from "./NavCenter";
import MobileNav from "./NavMobile/MobileNav";
import SideMenu from "./NavMobile/SideMenu";
import SideSearch from "./NavMobile/SideSearch";
import TopNav from "./NavTop";

function NavBar() {
    const [currentClass, setcurrentClass] = useState("navBar");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisibleMenu, setVisibleMenu] = useState(null);
    const [isVisibleSearch, setVisibleSearch] = useState(null);
    {/** const [isVisibleSearch, setVisibleSearch] = useState(null); */ }
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > prevScrollPos) {
         
                setcurrentClass("navBar navGoUp")
        

        } else if (currentScrollPos < prevScrollPos) {
            setcurrentClass("navBar navGoDown")
        }
        setPrevScrollPos(currentScrollPos);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, handleScroll])



    const sideMenuVisible = () => {
        setVisibleMenu(prev => !prev)
    }

    return (
        <>
            <nav className={currentClass}>
                <TopNav></TopNav>
                <CenterNav></CenterNav>
                <BottomNav></BottomNav>
                <MobileNav
                    isVisibleMenu={isVisibleMenu}
                    setVisibleMenu={sideMenuVisible}
                    isVisibleSearch={isVisibleSearch}
                    setVisibleSearch={setVisibleSearch}

                ></MobileNav>
            </nav>


            <SideMenu
                isVisibleMenu={isVisibleMenu}
                setVisibleMenu={setVisibleMenu} />
            <SideSearch
                isVisibleSearch={isVisibleSearch}
                setVisibleSearch={setVisibleSearch} />
        </>
    );
}

export default NavBar;
