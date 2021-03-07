import React from 'react'
import RouterHistory from '../../Routes/History'

function ProductCard({ url, name, categories, price }) {

    const goToProductPage = () => {
        RouterHistory.push("/products/" + name.trim());
    }


    return (
        <div className="product_card" onClick={e => { goToProductPage() }} >
            <img src={url} alt={name}></img>
            <div className="product_details">
                <div className="categories">
                    {categories.map((ct, i) => (
                        <span key={i}>{ct}</span>
                    ))}
                </div>
                <div className="name">{name}</div>
                <div className="price">
                    <span className="currency">$</span>
                    {price}</div>
            </div>
        </div>
    )
}

export default ProductCard
