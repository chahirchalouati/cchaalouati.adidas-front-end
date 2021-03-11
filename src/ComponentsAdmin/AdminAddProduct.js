import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FormAddProduct from '../Components/Forms/AdminForms/FormAddProduct';
import ProductsPreview from '../Components/Forms/Previews/ProductsPreview';
import Loading from '../Components/Loading/Loading';
import ProductService from '../Services/ProductService';

function AdminAddProduct() {

    const [isReady, setIsReady] = useState(false);
    const dispatch = useDispatch()
    const [request, setRequest] = useState({
        name: "",
        code: "",
        price: "",
        description: "",
        quantity: "",
        productionDate: "",
        files: [],
        sizes: [],
        categories: [],
        colors: [],
        gender: ""
    });

    useEffect(() => {
        setTimeout(() => {
            setIsReady(prev => true)
        }, 100);
        console.log(request.files);
    }, [request.files]);


    const setRequestColors = (colors) => {
        setRequest({ ...request, colors: colors })
    }



    const addFilesToRequest = (files) => {
        setRequest({ ...request, files: files })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(request);
        const formData = new FormData();

        request.files.map(file => formData.append("files", file));
        request.categories.map(category => formData.append("categories", category));
        request.colors.map(color => formData.append("colors", color));
        request.sizes.map(size => formData.append("sizes", size));

        formData.append("name", request.name);
        formData.append("code", request.code);
        formData.append("price", request.price);
        formData.append("description", request.description);
        formData.append("quantity", request.quantity);
        formData.append("productionDate", request.productionDate);
        formData.append("gender", request.gender);

        dispatch(ProductService.create(formData));
    }






    if (isReady) {
        return (
            <div className="admin__dash__container">
                <form className="admin__add__product__wrapper" onSubmit={onSubmit}>
                    <FormAddProduct setRequestColors={setRequestColors} request={request} setRequest={setRequest} />
                    <ProductsPreview addFilesToRequest={addFilesToRequest} />
                </form>

            </div>
        )
    } else if (!isReady) {
        return (
            <div className="loading__container">

                <Loading />
            </div>
        );
    }
}




export default AdminAddProduct
