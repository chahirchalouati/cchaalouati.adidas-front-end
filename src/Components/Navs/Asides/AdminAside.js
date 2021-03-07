import React from 'react'
import { AiOutlineBarChart, AiOutlineGift, AiOutlineMail, AiOutlineShopping } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
import { GoDashboard } from 'react-icons/go'
import { Link, NavLink } from 'react-router-dom'

function AdminAside({ setshowDashItem }) {
    return (
        <aside className="side__bar_admin">
            <div className="side__bar_admin_header">
                <div className="avatar_box">
                    <img
                        src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                    <div className="admin_name">{"SomeOne".toUpperCase()}</div>
                </div>
            </div>

            <div className="side__bar_admin_body">
                <div className="navigation_dashbord">
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/dashboard'>
                        <GoDashboard size={25} />
                        <div className="navigation_dashbord_Text">DashBoard</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/reports'>
                        <AiOutlineBarChart size={25} />
                        <div className="navigation_dashbord_Text">Reports</div>
                    </NavLink>

                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/products'>
                        <AiOutlineGift size={25} />
                        <div className="navigation_dashbord_Text">Products</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/orders'>
                        <AiOutlineShopping size={25} />
                        <div className="navigation_dashbord_Text">Orders</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/conversations'>
                        <FiMessageCircle size={25} />
                        <div className="navigation_dashbord_Text">Conversation</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/costumers'>
                        <BsPeople size={25} />
                        <div className="navigation_dashbord_Text">Costumers</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/mails'>
                        <AiOutlineMail size={25} />
                        <div className="navigation_dashbord_Text">Mails</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/bills'>
                        <AiOutlineGift size={25} />
                        <div className="navigation_dashbord_Text">Bills</div>
                    </NavLink>
                    <NavLink activeClassName='navgation_dashbord_item_active' className="navigation_dashbord_item" to='/invoices'>
                        <AiOutlineShopping size={25} />
                        <div className="navigation_dashbord_Text">Invoices</div>
                    </NavLink>



                </div>
            </div>

            <div className="side__bar_admin_footer">
                <small style={{ fontSize: '13px', color: 'black', textAlign: 'center', padding: '1em' }}>Help&Support</small>
                <small style={{ fontSize: '10px', color: 'black', textAlign: 'center', paddingTop: '.3em' }}>Copyright © 2021 Ichnelios.</small>
                <small style={{ fontSize: '10px', color: 'black', textAlign: 'center', padding: '1em' }}>All rights reserved.Powered by Chahir Chalouati</small>
            </div>
        </aside>
    )
}

export default AdminAside
