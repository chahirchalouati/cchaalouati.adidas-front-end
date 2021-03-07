import React, { useState } from 'react'

function LinkSimple({ name }) {
    const [state, setstate] = useState(false)
    return (
        <span onMouseLeave={e => { setstate(prev => false) }}>
            <div className="bottom_nav_navigation_item"
                style={{ cursor: 'pointer', fontWeight: state ? 'bold' : 'normal' }}
                onMouseOverCapture={e => { setstate(prev => true) }}>{name}</div>
            { state && <div className="nav_bottom_modals">{name}</div>}
        </span>
    )
}

export default LinkSimple
