import React, { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/all";
import ProductCard from "../Components/Cards/ProductCard";
import ViewAllCard from "../Components/Cards/ViewAllCard";
import { products } from "../data";




const SlideDots = ({ products, numberOfElementToDisplay }) => {
    return <div className='dots'></div>
}



function Carousel({ viewAllLink, title }) {

    const [cardWidth, setcardWidth] = useState(0);

    const [isDisabledNextButton, setDisabledNextButton] = useState(false);

    const goNext = () => {
        const card = document.querySelector(".product_card").offsetWidth;
        setcardWidth((p) => p > ((products.length * -card) - card) ? p + card * -5 : 0);
    };
    const goPrevious = () => {
        const card = document.querySelector(".product_card").offsetWidth;
        setcardWidth((p) => (p <= 0 ? p + card * 5 : 0));
    };

    return (

        <div className="slide_wrapper">

            {cardWidth < 0 && <GrPrevious className="btn_slider previous" onClick={() => { goPrevious(); }} />}
            {!isDisabledNextButton && <GrNext className="btn_slider next" onClick={() => { goNext(); }} />}

            <div className="slide_list" style={{ transition: "1.2s", transform: "translateX(" + cardWidth + "px)", }}>
                {products.map((p, i) => <ProductCard key={i} {...p} />)}
                {products.length > 0 && <ViewAllCard setDisabledNextButton={setDisabledNextButton} viewAllLink={viewAllLink} title={title} />}
            </div>

            <SlideDots products={products} numberOfElementToDisplay={5} />


        </div>

    );
}

export default Carousel;
