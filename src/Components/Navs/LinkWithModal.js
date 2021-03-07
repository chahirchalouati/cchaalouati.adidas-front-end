import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function LinkWithModal({ name, path }) {
    const [state, setstate] = useState(false)
    return (
        <NavLink className='link' activeClassName='link_active' to={path} onMouseLeave={e => { setstate(prev => false) }}>
            <div className="bottom_nav_navigation_item"
                style={{ cursor: 'pointer', fontWeight: 'bold', borderBottom: state ? '0.2em solid black' : 'none' }}
                onMouseOverCapture={e => { setstate(prev => true) }}>{name}</div>
            { state && <div className="nav_bottom_modals">{name}</div>}
        </NavLink>
    )


}

export default LinkWithModal
