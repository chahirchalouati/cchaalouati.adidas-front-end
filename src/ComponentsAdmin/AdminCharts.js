import React from 'react'

function AmdinCharts({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>)
}

export default AmdinCharts

