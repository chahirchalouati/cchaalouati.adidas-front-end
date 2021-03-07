import React from 'react'

function AdminMails({ match }) {
    console.log(match);
    return (
        <div>
            {match.path}
        </div>
    )
}

export default AdminMails


