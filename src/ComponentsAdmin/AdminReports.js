import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading/Loading';

function AdminReports({ match }) {
    const [isReady, setisReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setisReady(prev => true)
        }, 2000);
    }, [])
    if (isReady) {
        return (
            <div className='admin__dash__container'>
               <h1>Reports</h1>  
            </div>
        )
    }
    return (
        <div className="loading__container">
            <h1>Reports</h1>  
            <Loading />
        </div>
    )
}

export default AdminReports

