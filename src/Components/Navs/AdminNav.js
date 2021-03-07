import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineSetting, BiBell, BiMenu, FiMessageCircle, FiSearch, IoHelpSharp } from "react-icons/all";
import { useDispatch } from "react-redux";
import RouterHistory from "../../Routes/History";
import { LogOut } from "../../Services/AuthService";
import Logo from "../Logo/Logo";
import AdminSearchBox from "./AdminSearchBox";

function AdminNav({ openSearch, openSidebar, setOpenSearch, setOpenSideBar }) {


    const dispatch = useDispatch();
    const [showMenu, setshowMenu] = useState(false);
    const onLogout = () => {
        dispatch(LogOut());
    }

    return (
        <nav className="admin_nav">
            <BiMenu size={28} className="icon_search" onClick={e => { setOpenSideBar(prev => !prev) }} />
            <Logo></Logo>
            <FiSearch onClick={e => { setOpenSearch(prev => true) }} size={28} className="icon_search" />
            <AdminSearchBox></AdminSearchBox>
            <div className="admin_info">

                <span className="icons_box">
                    <span className='icon_box_item'> <span className='icon_counter'>1</span> <BiBell size={28}></BiBell></span>
                    <span className='icon_box_item'> <span className='icon_counter'>14</span> <FiMessageCircle size={28} ></FiMessageCircle></span>



                </span>
                <span className="avatar_box" style={{ marginLeft: '1em' }} >
                    <img onClick={e => { setshowMenu(prev=>!prev)}}
                        style={{ cursor: 'pointer' }}
                        src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                    {showMenu && <div className="profile_menu">
                        <div className="profile_menu_header">
                            <img src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div className="name">SomeOne</div>

                        </div>
                        <div className="profile_menu__wrapper">
                            <div className="profile_menu__wrapper__item"><IoHelpSharp size={25}> </IoHelpSharp><span>Help&Support</span></div>
                            <div className="profile_menu__wrapper__item"><AiOutlineSetting size={25} ></AiOutlineSetting><span>Settings</span></div>
                            <div className="profile_menu__wrapper__item" onClick={e => { onLogout() }}><AiOutlineLogout size={25}></AiOutlineLogout><span>Log-out</span></div>
                        </div>

                    </div>}

                </span>

            </div>
        </nav>
    );
}

export default AdminNav;
