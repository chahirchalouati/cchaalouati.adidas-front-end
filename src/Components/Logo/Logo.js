import React from 'react'
import RouterHistory from '../../Routes/History'

function Logo() {
    return (
        <div className="logo" style={{ cursor: 'pointer' }} >
            <img onClick={e => { RouterHistory.push("/") }}src="https://www.adidas.com/glass/react/b800dbd/assets/img/icon-adidas-logo.svg"
                alt="" />
        </div>
    )
}

export default Logo
