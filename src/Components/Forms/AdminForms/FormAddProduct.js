import React, { useEffect, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Services/CategorieService";
import { getColors } from "../../../Services/ColorServices";
import { getSizes } from "../../../Services/SizesService";
import ColorSelector from "../../Modals/ColorSelector";
import Select from "../../Select/Select";

function FormAddProduct() {
    const { RX_CATEGORIES, RX_COLORS, RX_SIZES } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [request, setrequest] = useState({
        name: null,
        code: null,
        description: null,
        files: [],
        price: null,
        categories: [],
        colors: [],
        sizes: [],
        date: null,
        discount: null,
        gender: null,

    });
    useEffect(() => {

        batch(() => {
            dispatch(getSizes())
            dispatch(getColors())
            dispatch(getCategories())
        })
    }, []);
    return (
        <>
            <form className="admin__add__product__wrapper_form">
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
                                setrequest({ ...request, [e.target.name]: e.target.value });
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
                                setrequest({ ...request, [e.target.name]: e.target.value });
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
                                setrequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Production Date</label>
                        <input
                            type="date"
                            name="date"
                            value={[request.date]}
                            placeholder={"Production Date"}
                            onChange={(e) => {
                                setrequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Discount</label>
                        <input
                            type={"text"}
                            name="name"
                            value={[request.discount]}
                            placeholder={"Discount"}
                            onChange={(e) => {
                                setrequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>

                    <div className="box_input_form">
                        <label htmlFor="">Quantity</label>
                        <input
                            type={"text"}
                            name="price"
                            value={[request.quantity]}
                            placeholder={"availble quantity"}
                            onChange={(e) => {
                                setrequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        />
                    </div>


                    <div className="box_input_form">
                        <label htmlFor="">categories</label>
                        <select
                            name="categories"
                            onChange={(e) => {
                                setrequest({ ...request, [e.target.name]: e.target.value });
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
                                setrequest({ ...request, [e.target.name]: e.target.value });
                            }}
                        >
                            {RX_SIZES.get_success && RX_SIZES.sizes.map((c, i) => <option value={c} key={i}>{c.value}</option>)}

                        </select>
                    </div>


                    <div className="box_input_form">
                        <label htmlFor="">gender</label>
                        <select
                            name="gender"
                            onChange={(e) => { setrequest({ ...request, [e.target.name]: e.target.value }); }}
                        >
                            {["MEN", "WOMEN", "KIDS"].map((c, i) => <option value={c} key={i}>{c}</option>)}


                        </select>
                    </div>



                </div>

                <ColorSelector />
                <div className="box_input_form">
                    <label htmlFor="">description</label>
                    <textarea
                        name="description"
                        value={[request.description]}
                        placeholder={"Write a description ..."}
                        onChange={(e) => {
                            setrequest({
                                ...request,
                                [e.target.description]: e.target.value,
                            });
                        }}
                    />
                </div>
            </form>
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
                            setrequest({ ...request, [e.target.name]: e.target.value });
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
                            setrequest({ ...request, [e.target.name]: e.target.value });
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
                            setrequest({ ...request, [e.target.name]: e.target.value });
                        }}
                    />
                </div>
                <div className="box_input_form">
                    <label htmlFor="">categories</label>
                    <select
                        name="categories"
                        onChange={(e) => {
                            setrequest({ ...request, [e.target.name]: e.target.value });
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
                            setrequest({ ...request, [e.target.name]: e.target.value });
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
                            setrequest({ ...request, [e.target.name]: e.target.value });
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
                            setrequest({
                                ...request,
                                [e.target.description]: e.target.value,
                            });
                        }}
                    />
                </div>

           






*/}