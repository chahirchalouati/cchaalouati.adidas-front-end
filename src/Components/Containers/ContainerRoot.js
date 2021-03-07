import React from 'react'

function ContainerRoot(props) {
    return (
        <main className='container_root'>
            {props.children}
        </main>
    )
}

export default ContainerRoot
