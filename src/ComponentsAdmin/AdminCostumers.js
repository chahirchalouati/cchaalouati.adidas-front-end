import React from 'react'

function AdminCostumers({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>
    )
}

export default AdminCostumers

