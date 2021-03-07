import React, { useEffect, useState } from 'react'
import FormAddProduct from '../Components/Forms/AdminForms/FormAddProduct'
import ProductsPreview from '../Components/Forms/Previews/ProductsPreview'
import Loading from '../Components/Loading/Loading';

function AdminAddProduct() {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsReady(prev => true)
        }, 500);
    }, [])
    if (isReady) {
        return (
            <div className="admin__dash__container">
                <div className="admin__add__product__wrapper">
                    <FormAddProduct />
                    <ProductsPreview />
                </div>

            </div>
        )
    } else if (!isReady) {
        return (
            <div className="loading__container">
                <h1>Add PRODUCTS</h1>
                <Loading />
            </div>
        );
    }
}




export default AdminAddProduct
