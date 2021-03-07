import React from 'react'

function AmdinDashboard({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>
    )
}

export default AmdinDashboard
