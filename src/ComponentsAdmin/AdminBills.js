import React from 'react'

function AdminBills({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>
    )
}

export default AdminBills

