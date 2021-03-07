import React from 'react'

function AdminInvoice({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>
    )
}

export default AdminInvoice

