import React from "react";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import Loading from "../Loading/Loading";

const ActionToPerform = () => {
    return (
        <div className="action_to_perform" >
            <h3 style={{ marginRight: 'auto' }}>Edit Product</h3>
            <div className="icon_action" style={{ cursor: 'pointer' }} onClick={e => { }}>
                <GrFormEdit size={25} />
            </div>
            <div className="icon_action" style={{ cursor: 'pointer' }} onClick={e => { }}>
                <MdDeleteSweep size={25} />
            </div>
        </div>
    );
};


const ListContainer = ({ title, children }) => {

    return <div className="list_container">
        <div className="title">{title}</div>
        {children}
    </div>
}

const ProductInfoBox = ({ product }) => {
    return (
        <div className="product_details_info">
            {product && (
                <>
                    <br />
                    <div className="code_article" style={{ fontSize: '14px', fontWeight: '500' }}>{product.code}</div>
                    <br />
                    <div className="name" style={{ fontSize: '25px', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic' }}>{product.name}</div>
                    <div className="category_box">
                        {product.categories.map((category, index) => <span key={index} className='category_item'>{index > 0 ? "/" + category.name : category.name}</span>)}
                    </div>

                    <div className="price" style={{ fontSize: '28px', fontWeight: '700' }}>${product.price}</div>
                    <br />
                    <div className="code_article" style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', fontStyle: 'italic' }}>Availble Sizes</div>
                    <div className="size_box">
                        {product.sizes.map((size, index) => <span key={index} className='size_item'>{size.value}</span>)}
                    </div>
                    <br />
                    <div className="code_article" style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', fontStyle: 'italic' }}>Availble Colors</div>
                    <div className="size_box">
                        {product.colors.map((color, index) => <span key={index} className='color_item' ><span className='color_placeHolder' style={{ background: color.hex }}></span><span>{color.name.toString().length > 10 ? color.name.toString().substr(0, 10) + "..." : color.name}</span></span>)}
                    </div>
                    <br />
                    <div className="code_article" style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', fontStyle: 'italic' }}>Description</div>
                    <p className="description" style={{ fontSize: '14px' }}>{product.description.toString().length > 500 ? <>{product.description.toString().substr(0, 500)}<span style={{ margin: '0px 5px', fontWeight: '600', cursor: 'pointer' }} onClick={e => { }}>...</span></> : product.description.toString()}</p>
                </>
            )}
        </div>
    );
};

function ProductDetailsCard({ product }) {
    if (product) {
        return (
            <div className="products_details">
                <ActionToPerform />
                <ProductInfoBox product={product}></ProductInfoBox>
            </div>
        );
    } else {
        return (
            <div className="products_details">
                <Loading></Loading>
            </div>
        );
    }
}

export default ProductDetailsCard;
