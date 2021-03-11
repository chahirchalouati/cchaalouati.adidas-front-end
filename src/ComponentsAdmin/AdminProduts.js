import React, { useEffect, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading";
import TableSearch from "../Components/Searchs/TableSearch";
import { getCategories } from "../Services/CategorieService";
import { getColors } from "../Services/ColorServices";
import ProductService from "../Services/ProductService";
import { getSizes } from "../Services/SizesService";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import RouterHistory from "../Routes/History";

const ProductRow = ({ product }) => {
    const {
        categories,
        code,
        colors,
        createdAt,
        description,
        details,
        files,
        gender,
        id,
        isNew,
        name,
        price,
        productionDate,
        quantity,
        ratings,
        reviews,
        sizes,
        updatedAt,
    } = product;
    return (
        <tr onClick={e => RouterHistory.push(`/products/details/${id}`)}>
            <td style={{ padding: "1em" }}>{id}</td>
            <td>{code}</td>
            <td>{name}</td>

            <td className={"table_categories"}>
                {categories.map((category, index) => {
                    return (
                        <span key={category.id}>
                            {index % 3 === 0 && <br />} <span>{category.name}</span>
                        </span>
                    );
                })}
            </td>
            <td>
                {reviews.lentgh > 0 ? reviews.reduce((rev, index) => index++) : 0}
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{gender}</td>
        </tr>
    );
};
const optionPages = (numberOfPages) => {
    let options = [];
    for (let index = 0; index < numberOfPages; index++) {
        options = [...options, <option key={index} value={index} >{index}</option>]

    }
    return options
}

function AmdinProduts({ match }) {
    const dispatch = useDispatch();
    const [pagination, setPagination] = useState({ size: 10, page: 0 });
    const [orderBy, setOrderedBy] = useState("createdAt");
    const {
        RX_PRODUCTS: {
            products,
            data,
            get_products_success,
            get_products_fail,
            get_products_start,
        },
    } = useSelector((state) => state);




    useEffect(() => {
        batch(() => {
            dispatch(getSizes());
            dispatch(getColors());
            dispatch(getCategories());

        });

    }, [dispatch]);


    useEffect(() => {
        getProducts();

    }, [pagination, orderBy])


    const getProducts = () => {
        dispatch(ProductService.getProductsByPage(pagination.page, pagination.size, orderBy));
    }

    const searchForProduct = (value) => {
        dispatch(ProductService.findByAny(value, orderBy, pagination.page, pagination.size));
    }
    const resetSearch = () => {
        dispatch(ProductService.getProductsByPage(pagination.page, pagination.size));
    }


    if (get_products_fail) {
        return (
            <div className="error_container">
                <h3 className="message" style={{ color: "red" }}>Please Connect to network</h3>
            </div>
        );
    }

    return (
        <div className="admin__dash__container">
            <div className="product_wrapper">
                <div className="product_wrapper_header" >
                    <h3 className="title">Products</h3>
                    <TableSearch resetSearch={resetSearch} setData={searchForProduct} />
                    <div className="sorting">
                        <span>Order By</span>
                        <select onChange={e => {
                            setOrderedBy(prev => e.target.value)




                        }} >
                            {["code",
                                "createdAt",
                                "gender",
                                "name",
                                "price",
                                "productionDate",
                                "quantity",
                                "updatedAt",].map((sort, index) => <option key={index} value={sort}>{sort.toUpperCase()}</option>)}


                        </select>
                    </div>
                    <Link className="link_go_to_add_product" to={"/products/create"}>Add Product</Link>


                </div>

                {get_products_start && <div className="loading__container"><Loading /></div>}
                {get_products_success && <>
                    <div className="product_wrapper_body" id="table_product">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>code</th>
                                    <th>name</th>
                                    <th>Categories</th>
                                    <th>review</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) => (
                                    <ProductRow key={i} product={product} />
                                ))}
                            </tbody>
                        </table>
                    </div>     <div className="product_wrapper_footer" >
                        <div className="pageable_box">
                            <div className="row_per_page">
                                <span>Rows </span>
                                <select
                                    onChange={e => { setPagination({ ...pagination, size: e.target.value, page: 0 }) }}
                                    name="pages">{[10, 25, 50, 100].map((value, key) => <option key={key} value={value}>{value}</option>)}
                                </select>
                            </div>
                            <div className="pages">
                                <span>Page </span>
                                <select
                                    onChange={e => { setPagination({ ...pagination, page: e.target.value }) }}
                                >{optionPages(data.totalPages)}
                                </select>
                            </div>
                            <div className="btn">
                                {!data.first && <GrFormPrevious onClick={e => { setPagination({ ...pagination, page: pagination.page - 1 }) }} size={25} style={{ cursor: 'pointer', margin: '0px 10px' }} />}

                                {!data.last && <GrFormNext size={25} onClick={e => { setPagination({ ...pagination, page: pagination.page + 1 }) }} style={{ cursor: 'pointer', margin: '0px 10px' }} />}
                            </div>
                        </div>

                    </div>
                </>
                }
            </div>
        </div>
    );



}

export default AmdinProduts;

// const table = document.getElementById("table");
// if (table.innerHeight + table.scrollTop === el.offsetHeight) {

//     let newPage = page;
//     setpage(page => page++)
//     dispatch(ProductService.getProductsByPage(page, 20));
// }
