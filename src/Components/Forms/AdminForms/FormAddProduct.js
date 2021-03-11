import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Services/CategorieService";
import { getColors } from "../../../Services/ColorServices";
import { getSizes } from "../../../Services/SizesService";
import ColorSelector from "../../Modals/ColorSelector";

function FormAddProduct({ setRequest, request, setRequestColors }) {
    const { RX_CATEGORIES, RX_COLORS, RX_SIZES } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        batch(() => {
            dispatch(getSizes())
            dispatch(getColors())
            dispatch(getCategories())
        })
    }, []);





    return (
        <>
            <div className="admin__add__product__wrapper_form">
                <h3>Add Product</h3>

                <div className="inputs_group">

                    <div className="box_input_form">
                        <label htmlFor="">code</label>
                        <input
                            type={"text"}
                            name="code"
                            value={[request.code]}
                            placeholder={"Article code"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">name</label>
                        <input
                            type={"text"}
                            name="name"
                            value={[request.name]}
                            placeholder={"Name"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">price</label>
                        <input
                            type={"text"}
                            name="price"
                            value={[request.price]}
                            placeholder={"Price"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Production Date</label>
                        <input
                            type="date"
                            name="productionDate"
                            value={[request.productionDate]}
                            placeholder={"Production Date"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Discount</label>
                        <input
                            type={"text"}
                            name="discount"
                            value={[request.discount]}
                            placeholder={"Discount"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Quantity</label>
                        <input
                            type={"text"}
                            name="quantity"
                            value={[request.quantity]}
                            placeholder={"availble quantity"}
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>


                    <div className="box_input_form">
                        <label htmlFor="">categories</label>
                        <select
                           
                            value={request["categories"]}
                            name="categories"
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: [...request.categories, e.currentTarget.value] });

                                console.log({ ...e.currentTarget.value });
                            }}
                        >
                            {RX_CATEGORIES.get_success && RX_CATEGORIES.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}

                        </select>
                    </div>


                    <div className="box_input_form">
                        <label htmlFor="">sizes</label>
                        <select

                            name="sizes"
                            onChange={(e) => {
                                setRequest({ ...request, [e.target.name]: [...request.sizes, e.target.value] });
                            }}
                        >
                            {RX_SIZES.get_success && RX_SIZES.sizes.map((size, i) => <option value={size.id} key={i}>{size.value}</option>)}

                        </select>
                    </div>


                    <div className="box_input_form">
                        <label htmlFor="">gender</label>
                        <select
                            name="gender"
                            onChange={(e) => { setRequest({ ...request, [e.target.name]: e.target.value }); }}
                        >
                            {["MEN", "WOMEN", "KIDS"].map((c, i) => <option value={c} key={i}>{c}</option>)}


                        </select>
                    </div>



                </div>

                <ColorSelector setRequestColors={setRequestColors} />
                <div className="box_input_form">
                    <label htmlFor="">description</label>
                    <textarea
                        name="description"
                        value={request.description}
                        placeholder={"Write a description ..."}
                        onChange={(e) => {
                            setRequest({
                                ...request,
                                [e.target.name]: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default FormAddProduct;
{/*


          <div className="box_input_form">
                    <label htmlFor="">name</label>
                    <input
                        type={"text"}
                        name="name"
                        value={[request.name]}
                        placeholder={"name"}
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="box_input_form">
                    <label htmlFor="">code</label>
                    <input
                        type={"text"}
                        name="code"
                        value={[request.code]}
                        placeholder={"code"}
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="box_input_form">
                    <label htmlFor="">price</label>
                    <input
                        type={"text"}
                        name="price"
                        value={[request.price]}
                        placeholder={"price"}
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="box_input_form">
                    <label htmlFor="">categories</label>
                    <select
                        name="categories"
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    >
                        {RX_CATEGORIES.get_success && RX_CATEGORIES.categories.map((c, i) => <option value={c} key={i}>{c.name}</option>)}

                    </select>
                </div>
                <div className="box_input_form">
                    <label htmlFor="">sizes</label>
                    <select

                        name="sizes"
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    >
                        {RX_SIZES.get_success && RX_SIZES.sizes.map((c, i) => <option value={c} key={i}>{c.value}</option>)}

                    </select>
                </div>
                <div className="box_input_form">
                    <label htmlFor="">gender</label>
                    <select
                        name="gender"
                        onChange={(e) => {
                            setRequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    ></select>
                </div>
                <div className="box_input_form">
                    <label htmlFor="">description</label>
                    <textarea
                        name="description"
                        value={[request.description]}
                        placeholder={"description"}
                        onChange={(e) => {
                            setRequest({
                                ...request,
                                [e.target.description]: e.target.value,
                            });
                        }}
                    />
                </div>

           






*/}