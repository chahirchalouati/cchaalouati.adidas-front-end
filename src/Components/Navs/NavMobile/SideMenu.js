import React from 'react';
import { GrClose } from 'react-icons/gr';
import { IoIosArrowForward } from 'react-icons/io';
import Logo from '../../Logo/Logo';

function SideMenu({ isVisibleMenu, setVisibleMenu }) {
    const navText = ["Men", "Women", "kids", "new Arrivals", "3 Stripe Life"];
    const navTextBottom = [
        "my Account",
        "exchanges & returns",
        "order tracker",
        "join creators club",
        "creators club",
        "store locator",
        "mobile apps",
      


    ];
    const classAnimation = isVisibleMenu ? 'side__menu__nav__mobile  show' : ' side__menu__nav__mobile  hide';



    return (
        <div className={classAnimation}>
            <div className="side__menu__nav__mobile__header">
                <Logo></Logo>
                <GrClose onClick={e => { setVisibleMenu(prev => false) }} size={25}></GrClose>
            </div>

            <div className="side__menu__nav_mobile__body">
                <div className="side__menu__nav_mobile__body__links">
                    {navText.map((t, i) => (
                        <div className='side__menu__nav_mobile__body__links_item' key={i}><span>{t}</span>  <IoIosArrowForward stye={{ cursor: 'pointer' }} size={25} /></div>
                    ))}
                </div>

                <div className="side__menu__nav_mobile__body__link_top_nav">
                    {navTextBottom.map((t, i) => (
                        <div className='side__menu__nav_mobile__body__link_top_nav_item' key={i}><span>{t}</span> </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideMenu
