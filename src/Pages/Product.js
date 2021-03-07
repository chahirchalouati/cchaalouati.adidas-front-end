import React from 'react'
import { useParams } from 'react-router-dom';
import ContainerRoot from '../Components/Containers/ContainerRoot'

function Product() {
    let { name } = useParams();
    return (
        <ContainerRoot>
            {name}
        </ContainerRoot>
    )
}

export default Product
