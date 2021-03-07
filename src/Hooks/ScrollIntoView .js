import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

function ScrollIntoView(props) {

    useEffect(() => {
        props.location && window.scrollTo(0, 0);
    }, [props.location])

    return (
        <>
            {props.children}
        </>
    )
}

export default withRouter(ScrollIntoView)  
