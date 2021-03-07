import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { batch, useDispatch } from "react-redux";
import Loading from "../Components/Loading/Loading";
import RouterHistory from "../Routes/History";
import { getCategories } from "../Services/CategorieService";
import { getColors } from "../Services/ColorServices";
import { getSizes } from "../Services/SizesService";


const tableRows = () => {
    let arr = [];

    for (let index = 0; index < 20; index++) {
        arr = [...arr, <tr className="border_bottom">
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>]

    }
    return arr
}







function AmdinProduts({ match }) {
    const [isReady, setisReady] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(getSizes());
            dispatch(getColors());
            dispatch(getCategories());
        });
        setTimeout(() => {
            setisReady((prev) => true);
        }, 500);


        return () => {
            setisReady((prev) => false);
        };
    }, []);

    if (isReady) {
        return (
            <div className="admin__dash__container">
                <div className="products_table_header">
                    <h5>Products</h5>
                    <button type="button" className="btn_add_products" onClick={e => { RouterHistory.push("/products/create") }}>
                        <GoPlus size={20}></GoPlus>
                        <span>Add Product</span>
                    </button>
                </div>
                <div className="products_table_body">

                    <div className="table__wrapper">

                        <table className="table"  >
                            <thead >
                                <tr className="border_bottom">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Price</th>
                                    <th>Reviews</th>
                                    <th>ratings</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows()}
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="products_table_footer"></div>
            </div>
        );
    }
    return (
        <div className="loading__container">
            <h1>PRODUCTS</h1>
            <Loading />
        </div>
    );
}

export default AmdinProduts;
